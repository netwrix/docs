#!/usr/bin/env python3
"""Compare the parsed C# models with the OpenAPI components.schemas.

Usage: diff_schemas.py <models.json> <spec.json> <merged-supplement.json> <out-dir>

Inputs
  models.json            output of extract_models.py
  spec.json              the OpenAPI document to check (components.schemas)
  merged-supplement.json plans/api-inventory/supplement/merged.json: its "schemas" are added to the spec,
                         its "overlay.schemas" patch (descriptions) or add properties to schemas
Outputs (in <out-dir>)
  diff.json              list of {schema, kind, property, spec, code, file, line, confidence, note}
  summary.md             counts, unmatched schemas, classes referenced by controllers without a schema,
                         and what the parser could not resolve
  unmatched.json         the unmatched lists in machine-readable form
  validation.json        parsed property count versus spec property count for each matched schema
  chunks/cNN.json        diff.json split by schema (about 25 schemas per chunk, one schema never split)

Everything is read-only text analysis. Nothing contacts a server.
"""
import importlib.util
import json
import pathlib
import re
import sys
import collections

HERE = pathlib.Path(__file__).resolve().parent
_spec = importlib.util.spec_from_file_location('extract_models', HERE / 'extract_models.py')
EM = importlib.util.module_from_spec(_spec)
sys.modules['extract_models'] = EM
_spec.loader.exec_module(EM)

camel = EM.camel
split_generic_args = EM.split_generic_args

# --------------------------------------------------------------------------------------------
# C# type -> expected OpenAPI shape
# --------------------------------------------------------------------------------------------

PRIM = {
    'string': ('string', None, False), 'char': ('string', None, True),
    'bool': ('boolean', None, True),
    'byte': ('integer', 'int32', True), 'sbyte': ('integer', 'int32', True),
    'short': ('integer', 'int32', True), 'ushort': ('integer', 'int32', True),
    'int': ('integer', 'int32', True), 'uint': ('integer', 'int32', True),
    'long': ('integer', 'int64', True), 'ulong': ('integer', 'int64', True),
    'nint': ('integer', 'int64', True), 'nuint': ('integer', 'int64', True),
    'float': ('number', 'float', True), 'double': ('number', 'double', True), 'decimal': ('number', 'double', True),
}
UNSIGNED = {'uint', 'ulong', 'ushort', 'sbyte', 'nuint'}
# well-known framework types by short or full name: (type, format, is_value_type)
KNOWN = {
    'Guid': ('string', 'uuid', True), 'DateTime': ('string', 'date-time', True),
    'DateTimeOffset': ('string', 'date-time', True), 'DateOnly': ('string', 'date', True),
    'TimeOnly': ('string', 'time', True), 'TimeSpan': ('string', 'TIMESPAN', True),
    'Uri': ('string', 'uri', False), 'Version': ('string', 'VERSION', False),
}
FULL_TO_SHORT = {
    'System.String': 'string', 'System.Int32': 'int', 'System.Int64': 'long', 'System.Int16': 'short',
    'System.UInt32': 'uint', 'System.UInt64': 'ulong', 'System.UInt16': 'ushort', 'System.Byte': 'byte',
    'System.SByte': 'sbyte', 'System.Boolean': 'bool', 'System.Double': 'double', 'System.Single': 'float',
    'System.Decimal': 'decimal', 'System.Char': 'char', 'System.Object': 'object',
    'System.Guid': 'Guid', 'System.DateTime': 'DateTime', 'System.DateTimeOffset': 'DateTimeOffset',
    'System.TimeSpan': 'TimeSpan', 'System.DateOnly': 'DateOnly', 'System.TimeOnly': 'TimeOnly',
    'System.Uri': 'Uri', 'System.Version': 'Version',
}
ANY_TYPES = {'object', 'dynamic', 'JObject', 'JToken', 'JArray', 'JValue', 'JsonElement', 'JsonNode', 'JsonObject',
             'JsonDocument', 'ExpandoObject', 'JsonArray', 'JsonValue'}
BINARY = {'IFormFile', 'Stream', 'FileStream', 'MemoryStream'}
GENERIC_COLLECTIONS = EM.COLLECTION_NAMES
GENERIC_DICTS = EM.DICT_NAMES


class Ctx:
    def __init__(self, models, spec_keys):
        self.types = models['types']
        self.spec_keys = spec_keys  # dict: canonical -> spec key
        self.by_clr = {}
        for k, n in self.types.items():
            self.by_clr[k] = k
            self.by_clr.setdefault(n['fqn'], k)


def canon_spec_key(key):
    """Turn a spec schema key into (open_name, [canonical arg strings]) ; non generic -> (key, [])."""
    m = re.match(r'^([^\[]+`\d+)\[(.*)\]$', key, re.S)
    if not m:
        return key, []
    open_name = m.group(1)
    inner = m.group(2)
    return open_name, [canon_arg(x) for x in split_bracket_groups(inner)]


def split_bracket_groups(s):
    """'[[A, asm],[B, asm]]' inner text (without the outer pair) -> list of group contents."""
    # s looks like '[A, asm...],[B, asm...]' (outer pair stripped already)
    res, d, cur = [], 0, ''
    for c in s:
        if c == '[':
            d += 1
            if d == 1:
                cur = ''
                continue
        elif c == ']':
            d -= 1
            if d == 0:
                res.append(cur)
                continue
        if d >= 1:
            cur += c
    return res


def canon_arg(group):
    """'System.Nullable`1[[System.Guid, asm, ...]], System.Private.CoreLib, Version=...' -> 'System.Nullable`1<System.Guid>'"""
    d = 0
    cut = len(group)
    for i, c in enumerate(group):
        if c == '[':
            d += 1
        elif c == ']':
            d -= 1
        elif c == ',' and d == 0:
            cut = i
            break
    name = group[:cut].strip()
    open_name, args = canon_spec_key(name)
    if args:
        return '%s<%s>' % (open_name, ','.join(args))
    return open_name


def prim_of(name):
    """Return the primitive/known name for a C# or full name, else None."""
    n = name.strip()
    n = FULL_TO_SHORT.get(n, n)
    if n in PRIM or n in KNOWN or n == 'object':
        return n
    return None


# descriptor: dict with keys
#   kind: 'prim' (t, f) | 'ref' (key) | 'array' (items) | 'dict' (items) | 'any' | 'unknown' (name) | 'binary'
#   value_type: bool ; nullable_explicit: bool ; nullable: bool(final)

def describe(ts, refs, ctx, nrt, subst_ok=True):
    ts = ts.strip()
    nullable = False
    if ts.endswith('?'):
        nullable = True
        ts = ts[:-1]
    m = re.match(r'^(.*)\[[,\s]*\]$', ts)
    if m:
        el = m.group(1)
        if el == 'byte':
            return {'kind': 'prim', 't': 'string', 'f': 'byte', 'value_type': False, 'nullable_explicit': nullable,
                    'src': ts}
        return {'kind': 'array', 'items': describe(el, refs, ctx, nrt), 'value_type': False,
                'nullable_explicit': nullable, 'src': ts}
    name, args = split_generic_args(ts)
    short = name.split('.')[-1]
    if short == 'Nullable' and len(args) == 1:
        d = describe(args[0], refs, ctx, nrt)
        d['nullable_explicit'] = True
        return d
    if short in GENERIC_DICTS and len(args) == 2:
        return {'kind': 'dict', 'items': describe(args[1], refs, ctx, nrt), 'value_type': False,
                'nullable_explicit': nullable, 'src': ts}
    if short in GENERIC_COLLECTIONS and len(args) == 1:
        el = args[0]
        if prim_of(el) == 'byte' and False:
            pass
        return {'kind': 'array', 'items': describe(el, refs, ctx, nrt), 'value_type': False,
                'nullable_explicit': nullable, 'src': ts}
    if short in ('IEnumerable', 'IList', 'ICollection', 'ArrayList') and not args:
        return {'kind': 'array', 'items': {'kind': 'any', 'value_type': False}, 'value_type': False,
                'nullable_explicit': nullable, 'src': ts}
    p = prim_of(name) if not args else None
    if p in PRIM:
        t, f, vt = PRIM[p]
        d = {'kind': 'prim', 't': t, 'f': f, 'value_type': vt, 'nullable_explicit': nullable, 'src': ts}
        if p in UNSIGNED:
            d['unsigned'] = True
        if p == 'string' and nrt and not nullable:
            d['nrt_nonnull'] = True
        return d
    if p in KNOWN:
        t, f, vt = KNOWN[p]
        return {'kind': 'prim', 't': t, 'f': f, 'value_type': vt, 'nullable_explicit': nullable, 'src': ts}
    if p == 'object' or short in ANY_TYPES:
        return {'kind': 'any', 'value_type': False, 'nullable_explicit': nullable, 'src': ts}
    if short in BINARY:
        return {'kind': 'prim', 't': 'string', 'f': 'binary', 'value_type': False, 'nullable_explicit': nullable, 'src': ts}
    # model type
    key = refs.get(ts) if refs else None
    if key in (None, 'generic-param', 'primitive', 'framework'):
        key = None
        # full names produced by generic substitution
        if name in ctx.by_clr and not args:
            key = ctx.by_clr[name]
        elif args:
            op = '%s`%d' % (name, len(args))
            if op in ctx.types:
                key = op
    if key is None:
        return {'kind': 'unknown', 'name': ts, 'value_type': False, 'nullable_explicit': nullable, 'src': ts}
    n = ctx.types[key]
    vt = n['kind'] in ('enum', 'struct', 'record struct')
    if n['generic_params']:
        cargs = [canon_type_name(a, refs, ctx) for a in args]
        spec_key = ctx.spec_keys.get(('%s' % key, tuple(cargs)))
        return {'kind': 'ref', 'key': key, 'generic_args': cargs, 'spec_key': spec_key, 'value_type': vt,
                'nullable_explicit': nullable, 'src': ts, 'is_enum': n['kind'] == 'enum'}
    return {'kind': 'ref', 'key': key, 'spec_key': key, 'value_type': vt, 'nullable_explicit': nullable, 'src': ts,
            'is_enum': n['kind'] == 'enum'}


def canon_type_name(ts, refs, ctx):
    ts = ts.strip().rstrip('?')
    name, args = split_generic_args(ts)
    p = prim_of(name) if not args else None
    if p:
        for full, short in FULL_TO_SHORT.items():
            if short == p:
                return full
    r = refs.get(ts) if refs else None
    if r and r not in ('primitive', 'generic-param'):
        base = r
    elif name in ctx.by_clr:
        base = ctx.by_clr[name]
    else:
        base = name
    if args:
        inner = ','.join(canon_type_name(a, refs, ctx) for a in args)
        if '`' not in base:
            base = base + '`%d' % len(args)
        return '%s<%s>' % (base, inner)
    return base


# --------------------------------------------------------------------------------------------
# Spec side
# --------------------------------------------------------------------------------------------

def spec_describe(ps):
    """Describe a spec property schema in the same terms."""
    if '$ref' in ps:
        return {'kind': 'ref', 'key': ps['$ref'].split('/')[-1]}
    if 'allOf' in ps and len(ps['allOf']) == 1 and '$ref' in ps['allOf'][0]:
        d = spec_describe(ps['allOf'][0])
        d['nullable'] = bool(ps.get('nullable'))
        return d
    t = ps.get('type')
    nullable = bool(ps.get('nullable'))
    if t == 'array':
        return {'kind': 'array', 'items': spec_describe(ps.get('items', {})), 'nullable': nullable}
    if t == 'object' or (t is None and ('properties' in ps or 'additionalProperties' in ps)):
        ap = ps.get('additionalProperties')
        if isinstance(ap, dict) and ap:
            return {'kind': 'dict', 'items': spec_describe(ap), 'nullable': nullable}
        return {'kind': 'object', 'nullable': nullable}
    if t is None:
        return {'kind': 'any', 'nullable': nullable}
    return {'kind': 'prim', 't': t, 'f': ps.get('format'), 'nullable': nullable}


def show_spec(d):
    if d is None:
        return None
    k = d['kind']
    if k == 'ref':
        return '$ref ' + d['key']
    if k == 'prim':
        return d['t'] + ('/' + d['f'] if d.get('f') else '') + (' nullable' if d.get('nullable') else '')
    if k == 'array':
        return 'array of ' + show_spec(d['items']) + (' nullable' if d.get('nullable') else '')
    if k == 'dict':
        return 'map to ' + show_spec(d['items'])
    if k == 'object':
        return 'object' + (' nullable' if d.get('nullable') else '')
    return 'untyped' + (' nullable' if d.get('nullable') else '')


def show_code(cs_type, d):
    return cs_type


def compare_desc(c, s, ctx, path=''):
    """Return list of (kind, spec_text, code_text, confidence_hint) for differences between code descriptor c and spec descriptor s."""
    out = []
    ck = c['kind']
    if ck == 'unknown':
        return out  # cannot judge
    if ck == 'any':
        if s['kind'] not in ('any', 'object', 'ref'):
            out.append(('type_mismatch', show_spec(s), 'untyped (%s)' % c['src'], 'medium'))
        return out
    if ck == 'prim':
        if s['kind'] != 'prim':
            out.append(('type_mismatch', show_spec(s), '%s (%s)' % (c['t'] + ('/' + c['f'] if c['f'] else ''), c['src']),
                        'high'))
            return out
        if c['f'] in ('TIMESPAN', 'VERSION'):
            if s['t'] != 'string':
                out.append(('type_mismatch', show_spec(s), '%s (%s)' % (c['src'], 'string-like'), 'medium'))
            return out
        if c['t'] != s['t']:
            out.append(('type_mismatch', show_spec(s), '%s%s (%s)' % (c['t'], '/' + c['f'] if c['f'] else '', c['src']), 'high'))
        elif (c['f'] or None) != (s['f'] or None):
            out.append(('format_mismatch', show_spec(s), '%s%s (%s)' % (c['t'], '/' + c['f'] if c['f'] else '', c['src']),
                        'medium' if c.get('unsigned') else 'high'))
        return out
    if ck == 'ref':
        if s['kind'] != 'ref':
            out.append(('type_mismatch', show_spec(s), '$ref %s (%s)' % (c.get('spec_key') or c['key'], c['src']), 'high'))
            return out
        want = c.get('spec_key')
        if want is None:
            # generic instantiation not in the spec: compare by open name only
            if not s['key'].startswith(c['key'].split('`')[0]):
                out.append(('ref_mismatch', show_spec(s), '$ref %s (%s)' % (c['key'], c['src']), 'medium'))
        elif want != s['key']:
            out.append(('ref_mismatch', show_spec(s), '$ref %s (%s)' % (want, c['src']), 'high'))
        return out
    if ck == 'array':
        if s['kind'] != 'array':
            out.append(('type_mismatch', show_spec(s), 'array of %s' % c['items'].get('src', '?') + ' (%s)' % c['src'], 'high'))
            return out
        sub = compare_desc(c['items'], s['items'], ctx, path + '[]')
        for (k, st, ct, conf) in sub:
            out.append(('items_mismatch', st, ct, conf))
        return out
    if ck == 'dict':
        if s['kind'] not in ('dict', 'object'):
            out.append(('type_mismatch', show_spec(s), 'map (%s)' % c['src'], 'high'))
            return out
        if s['kind'] == 'dict':
            for (k, st, ct, conf) in compare_desc(c['items'], s['items'], ctx, path):
                out.append(('items_mismatch', st, ct, conf))
        return out
    return out


def expected_nullable(c):
    """Swashbuckle behaviour: value types are non-nullable unless T? ; reference types are nullable unless NRT says no.
    $ref properties never carry nullable in OAS 3.0 output, so those are not compared."""
    if c['kind'] in ('ref', 'unknown'):
        return None
    if c.get('nullable_explicit'):
        return True
    if c['kind'] == 'prim' and c['value_type']:
        return False
    if c.get('nrt_nonnull'):
        return False
    if c['kind'] in ('array', 'dict', 'any'):
        return True
    return True


# --------------------------------------------------------------------------------------------
# Main
# --------------------------------------------------------------------------------------------

def effective_spec_schemas(spec, merged):
    """Return {key: (schema, source)} for spec + supplement schemas, with overlay applied."""
    res = {}
    for k, v in spec.items():
        res[k] = (json.loads(json.dumps(v)), 'spec')
    for k, v in (merged.get('schemas') or {}).items():
        if k not in res:
            res[k] = (json.loads(json.dumps(v)), 'supplement')
    for k, ov in ((merged.get('overlay') or {}).get('schemas') or {}).items():
        if k in res:
            base = res[k][0]
            props = base.setdefault('properties', {})
            for pn, pv in (ov.get('properties') or {}).items():
                if pn in props:
                    for kk, vv in pv.items():
                        props[pn][kk] = vv
                else:
                    props[pn] = pv
                    props[pn]['_overlay_added'] = True
            if 'description' in ov:
                base['description'] = ov['description']
            if ov.get('required'):
                base['required'] = sorted(set(base.get('required', [])) | set(ov['required']))
        else:
            if (ov.get('properties') and any(('type' in p or '$ref' in p) for p in ov['properties'].values())):
                res[k] = (json.loads(json.dumps(ov)), 'overlay')
    return res


def newtonsoft_ignore(p, node):
    """Is the property ignored by Newtonsoft at runtime? Returns (ignored, certain)."""
    by = p.get('ignored_by') or []
    if not by:
        return False, True
    usings = node['usings'] if node else []
    nsj = 'Newtonsoft.Json' in usings
    stj = 'System.Text.Json.Serialization' in usings
    if 'IgnoreDataMember' in by or 'NonSerialized' in by:
        return True, True
    if 'JsonIgnore' in by:
        if nsj and not stj:
            return True, True
        if stj and not nsj:
            return False, True  # System.Text.Json attribute: Newtonsoft ignores it
        return True, False
    return False, True


def stj_ignore(p, node):
    by = p.get('ignored_by') or []
    if 'JsonIgnore' in by:
        usings = node['usings'] if node else []
        nsj = 'Newtonsoft.Json' in usings
        stj = 'System.Text.Json.Serialization' in usings
        if stj and not nsj:
            return True
        return False
    return 'IgnoreDataMember' in by


def ss_lookup(cls_key, prop_name, ctx):
    """ShouldSerialize<Prop>() method on the class or any parsed base. Returns its info dict or None."""
    seen = set()
    k = cls_key
    while k and k not in seen:
        seen.add(k)
        n = ctx.types[k]
        info = (n.get('should_serialize') or {}).get(prop_name)
        if info:
            return info
        k = n.get('base')
    return None


def runtime_members(node_key, ctx):
    """Members Newtonsoft serializes for this type: name -> prop dict (plus flags)."""
    n = ctx.types[node_key]
    res = {}
    for p in n.get('effective_properties', []):
        decl = ctx.types.get(p['declared_in'])
        if p['static']:
            continue
        has_jp = 'JsonProperty' in p['attributes']
        if p['kind'] == 'property':
            if not p.get('has_getter', True) and not has_jp:
                continue
            if p.get('getter_restricted') and not has_jp:
                continue
        if not p['public'] and not has_jp:
            continue
        ign, certain = newtonsoft_ignore(p, decl)
        if ign:
            continue
        ss = ss_lookup(node_key, p['name'], ctx)
        if ss and ss['always_false']:
            continue
        name = p['json_name'] if (p.get('json_name') and p.get('json_name_source') == 'JsonProperty') else None
        if name is None and p.get('json_name'):
            name = p['json_name'] if p.get('json_name_source') != 'JsonPropertyName' else camel(p['name'])
        jname = name or camel(p['name'])
        q = dict(p)
        q['_ambiguous_ignore'] = not certain
        q['_ss'] = ss
        q['_json_name'] = jname
        q['_node'] = decl
        res[jname] = q
    return res


def main():
    models = json.load(open(sys.argv[1]))
    specdoc = json.load(open(sys.argv[2]))
    merged = json.load(open(sys.argv[3]))
    out_dir = pathlib.Path(sys.argv[4])
    out_dir.mkdir(parents=True, exist_ok=True)
    spec = specdoc['components']['schemas']
    schemas = effective_spec_schemas(spec, merged)

    # index spec keys
    spec_keys = {}
    open_to_inst = collections.defaultdict(list)
    for k in schemas:
        o, a = canon_spec_key(k)
        if a:
            spec_keys[(o, tuple(a))] = k
            open_to_inst[o].append(k)
    ctx = Ctx(models, spec_keys)
    types = models['types']
    ctx.consts = build_consts(types)

    diffs = []
    matched = {}
    unmatched_spec = {'external_framework': [], 'namespace_without_source': [], 'no_class_found': [], 'generic_open_missing': []}
    validation = []

    src_namespaces = {n['namespace'] for n in types.values()}

    def add(schema, kind, prop, spec_v, code_v, file, line, conf, note=None):
        d = {'schema': schema, 'kind': kind, 'property': prop, 'spec': spec_v, 'code': code_v, 'file': file,
             'line': line, 'confidence': conf}
        if note:
            d['note'] = note
        diffs.append(d)

    def short_key(k):
        o, a = canon_spec_key(k)
        return o

    for key in sorted(schemas):
        sch, source = schemas[key]
        o, a = canon_spec_key(key)
        cls_key = o
        if cls_key not in types:
            # try nested spelled with '.'? (should not happen) then give up
            if o.startswith(('System.', 'Microsoft.', 'Newtonsoft.', 'Swashbuckle.', 'Serilog.')):
                unmatched_spec['external_framework'].append(key)
            else:
                ns = o.rsplit('.', 1)[0] if '.' in o.split('`')[0] else ''
                ns_base = ns.split('+')[0]
                top_ns = '.'.join(o.split('+')[0].split('.')[:-1])
                if top_ns not in src_namespaces:
                    unmatched_spec['namespace_without_source'].append(key)
                else:
                    unmatched_spec['no_class_found'].append(key)
            continue
        node = types[cls_key]
        matched[key] = cls_key
        if node['kind'] == 'enum':
            compare_enum(key, sch, node, add)
            validation.append({'schema': key, 'kind': 'enum', 'spec_members': len(sch.get('enum', [])),
                               'code_members': len(node['members'])})
            continue
        if sch.get('enum'):
            add(key, 'kind_mismatch', None, 'enum', node['kind'], node['file'], node['line'], 'high',
                'The spec describes an enum but the source type is a %s' % node['kind'])
            continue
        compare_class(key, sch, node, a, ctx, add, validation)

    # classes referenced by controllers without spec schema
    root_note = 'Controller type scan is text based (see summary).'
    ctrl_refs = controller_refs(models, ctx, pathlib.Path(sys.argv[1]).parent)

    spec_open_names = {canon_spec_key(k)[0] for k in schemas}
    no_schema = []
    for tkey, info in sorted(ctrl_refs.items()):
        n = types.get(tkey)
        if not n:
            continue
        if tkey in spec_open_names:
            continue
        no_schema.append({'type': tkey, 'kind': n['kind'], 'file': n['file'], 'line': n['line'],
                          'used_by': sorted(info)[:6], 'uses': len(info)})

    diffs.sort(key=lambda d: (d['schema'], d['kind'], d['property'] or '', json.dumps(d['spec'], sort_keys=True, default=str)))
    (out_dir / 'diff.json').write_text(json.dumps(diffs, indent=1, sort_keys=True, ensure_ascii=False) + '\n')
    (out_dir / 'unmatched.json').write_text(json.dumps({
        'spec_schemas_without_class': {k: sorted(v) for k, v in unmatched_spec.items()},
        'classes_referenced_by_controllers_without_spec_schema': no_schema,
        'unresolved_by_parser': models['unresolved'],
    }, indent=1, sort_keys=True, ensure_ascii=False) + '\n')
    validation.sort(key=lambda v: v['schema'])
    (out_dir / 'validation.json').write_text(json.dumps(validation, indent=1, sort_keys=True) + '\n')

    # chunks
    chunk_dir = out_dir / 'chunks'
    chunk_dir.mkdir(exist_ok=True)
    for old in chunk_dir.glob('c*.json'):
        old.unlink()
    by_schema = collections.OrderedDict()
    for d in diffs:
        by_schema.setdefault(d['schema'], []).append(d)
    names = list(by_schema)
    chunk_files = []
    for i in range(0, len(names), 25):
        part = names[i:i + 25]
        fn = chunk_dir / ('c%02d.json' % (i // 25 + 1))
        payload = {'chunk': fn.stem, 'schemas': part, 'diffs': [d for s in part for d in by_schema[s]]}
        fn.write_text(json.dumps(payload, indent=1, sort_keys=True, ensure_ascii=False) + '\n')
        chunk_files.append(fn)

    write_summary(out_dir, models, schemas, matched, diffs, unmatched_spec, no_schema, validation, chunk_files, by_schema)
    print(json.dumps({'spec_schemas': len(schemas), 'matched': len(matched), 'diffs': len(diffs),
                      'schemas_with_diffs': len(by_schema), 'chunks': len(chunk_files),
                      'unmatched': {k: len(v) for k, v in unmatched_spec.items()},
                      'controller_types_without_schema': len(no_schema)}, sort_keys=True))


def compare_enum(key, sch, node, add):
    spec_vals = sch.get('enum', [])
    spec_names = [str(x) for x in spec_vals]
    code_names = [m['name'] for m in node['members']]
    f, l = node['file'], node['line']
    ss, cs = set(spec_names), set(code_names)
    for nm in code_names:
        if nm not in ss:
            m = next(x for x in node['members'] if x['name'] == nm)
            add(key, 'enum_value_missing_in_spec', nm, None, '%s = %s' % (nm, m['value']), f, m['line'], 'high')
    for nm in spec_names:
        if nm not in cs:
            add(key, 'enum_value_extra_in_spec', nm, nm, None, f, l, 'high')
    if ss == cs and spec_names != code_names:
        add(key, 'enum_order', None, spec_names, code_names, f, l, 'low',
            'Same names, different order. The wire value is the number, so order matters if the docs list numbers.')
    und = node.get('underlying')
    exp_fmt = 'int64' if und in ('long', 'ulong') else 'int32'
    if sch.get('type') not in (None, 'integer', 'string'):
        add(key, 'enum_type_mismatch', None, sch.get('type'), 'integer', f, l, 'high')
    elif sch.get('type') == 'integer' and (sch.get('format') or 'int32') != exp_fmt:
        add(key, 'enum_type_mismatch', None, 'integer/%s' % sch.get('format'), 'integer/%s (underlying %s)' % (exp_fmt, und or 'int'), f, l, 'high')
    vals = [m['value'] for m in node['members']]
    if any(v is None for v in vals):
        add(key, 'enum_value_unresolved', None, None, [m['name'] for m in node['members'] if m['value'] is None], f, l, 'low',
            'The parser could not evaluate these enum member values.')


def build_consts(types):
    """const name -> list of (owner key, int value). Only integer literal constants."""
    res = collections.defaultdict(list)
    for k, n in types.items():
        for p in n['properties']:
            if p['kind'] == 'field' and 'const' in p.get('modifiers', []) and p.get('default') is not None:
                v = EM.parse_int(str(p['default']).strip())
                if v is not None:
                    res[p['name']].append((k, v))
    return res


def const_value(x, node, consts):
    """Resolve a constant used in an attribute to an int. Returns (value, resolved_flag)."""
    if isinstance(x, (int, float)):
        return x, True
    if isinstance(x, str):
        nm = x.split('.')[-1]
        cands = consts.get(nm, [])
        if len(cands) == 1:
            return cands[0][1], True
        same = [c for c in cands if node and c[0].split('+')[0] == node['fqn'].split('+')[0]]
        if len(same) == 1:
            return same[0][1], True
    return x, False


def compare_class(key, sch, node, spec_args, ctx, add, validation):
    cls_key = node['clr_name']
    file, line = node['file'], node['line']
    runtime = runtime_members(cls_key, ctx)
    # generic substitution (spec instantiation args -> class generic params)
    subst = {}
    if node['generic_params']:
        if len(spec_args) == len(node['generic_params']):
            subst = dict(zip(node['generic_params'], spec_args))
        else:
            add(key, 'generic_arity_mismatch', None, spec_args, node['generic_params'], file, line, 'medium')
    spec_props = sch.get('properties') or {}
    spec_required = set(sch.get('required') or [])
    incomplete = not node.get('inheritance_complete', True)
    validation.append({'schema': key, 'kind': 'class', 'spec_members': len(spec_props), 'code_members': len(runtime),
                       'inheritance_complete': not incomplete, 'class': cls_key, 'generic': bool(node['generic_params'])})
    missing = [n for n in runtime if n not in spec_props]
    extra = [n for n in spec_props if n not in runtime]
    # name-only-case differences
    lower_extra = {n.lower(): n for n in extra}
    for n in list(missing):
        if n.lower() in lower_extra:
            e = lower_extra[n.lower()]
            p = runtime[n]
            add(key, 'name_mismatch', n, e, n, p['_node']['file'] if p['_node'] else file, p['line'], 'high',
                'Same name, different spelling or case.')
            missing.remove(n)
            extra.remove(e)

    def conf_for(p, base='high'):
        c = base
        if p.get('conditional'):
            c = 'medium'
        if p.get('_ambiguous_ignore'):
            c = 'medium'
        for k, v in p.get('refs', {}).items():
            if k == '__status__' or v is not None or v == 'framework':
                continue
            nm = split_generic_args(k.rstrip('?'))[0]
            if nm in KNOWN or nm in ANY_TYPES or nm in BINARY or nm.split('.')[-1] in KNOWN:
                continue
            c = 'medium'
        for k, v in (p.get('refs', {}).get('__status__') or {}).items():
            nm = split_generic_args(k.rstrip('?'))[0]
            if nm in KNOWN or nm in ANY_TYPES or nm in BINARY:
                continue
            c = 'medium'
        return c

    for n in sorted(missing):
        p = runtime[n]
        decl = p['_node']
        note = None
        conf = conf_for(p)
        if p['kind'] == 'field':
            note = 'Public field. Newtonsoft serializes it; the OpenAPI generator (System.Text.Json) skips fields, so the spec cannot show it.'
        elif 'JsonProperty' in p['attributes'] and not p['public']:
            note = 'Non-public member with [JsonProperty]; serialized by Newtonsoft only.'
        elif not p.get('has_setter', True):
            note = 'Read-only (no setter): returned in responses, not accepted in requests.'
        add(key, 'missing_in_spec', n, None, '%s %s' % (p['type'], p['name']),
            decl['file'] if decl else file, p['line'], conf, note)
    for n in sorted(extra):
        sp = spec_props[n]
        note = None
        conf = 'high'
        # find a code member of that name that is ignored by Newtonsoft
        cand = None
        for p in node.get('effective_properties', []):
            nm = p['json_name'] if p.get('json_name') and p.get('json_name_source') == 'JsonProperty' else camel(p['name'])
            if nm == n:
                cand = p
                break
        if cand is not None:
            ssi = ss_lookup(cls_key, cand['name'], ctx)
            if ssi and ssi['always_false']:
                note = 'ShouldSerialize%s() always returns false, so Newtonsoft never writes it (line %d).' % (cand['name'], ssi['line'])
            elif cand['static']:
                note = 'The source member is static; it is not serialized.'
            elif cand.get('ignored_by'):
                note = 'Ignored at runtime by %s; the OpenAPI generator did not see the Newtonsoft attribute.' % ','.join(cand['ignored_by'])
            elif not cand['public']:
                note = 'The source member is not public.'
            elif cand.get('has_getter') is False:
                note = 'Write-only property (no getter): never returned.'
            else:
                note = 'Found in the source but not serialized (see attributes).'
        elif incomplete:
            conf = 'low'
            note = 'Base class %s is not in the export; the property may be inherited.' % (node.get('base_external') or 'unknown')
        elif sp.get('_overlay_added'):
            note = 'Added by the supplement overlay; no such member in the source.'
        add(key, 'extra_in_spec', n, show_spec(spec_describe(sp)), None, file, line, conf, note)

    # compare matching
    for n in sorted(set(runtime) & set(spec_props)):
        p = runtime[n]
        decl = p['_node'] or node
        f, l = decl['file'], p['line']
        ptype = p['type']
        refs = dict(p.get('refs', {}))
        if subst:
            # replace generic params by canonical full names
            for gp, full in subst.items():
                ptype = re.sub(r'(?<![\w.])%s(?![\w])' % re.escape(gp), full, ptype)
        c = describe(ptype, refs, ctx, p.get('nrt', False))
        if c['kind'] == 'prim' and c['t'] == 'string' and not c['f']:
            if 'EmailAddress' in p['attributes']:
                c['f'] = 'email'
            elif 'Url' in p['attributes']:
                c['f'] = 'uri'
        s = spec_describe(spec_props[n])
        conf0 = conf_for(p)
        if p.get('_ss'):
            add(key, 'conditional_serialization', n, show_spec(s), 'ShouldSerialize%s(): %s' % (p['name'], p['_ss']['body'][:120]),
                decl['file'], p['_ss']['line'], 'high',
                'Newtonsoft writes this property only when the method returns true; the spec shows it as always present.')
        for (kind, st, ct, conf) in compare_desc(c, s, ctx):
            cf = conf if conf0 == 'high' else conf0
            add(key, kind, n, st, ct, f, l, cf)
        # nullability
        en = expected_nullable(c)
        if en and p['required'] and c['kind'] in ('prim', 'array', 'dict') and not c.get('nullable_explicit'):
            en = False  # Swashbuckle: [Required] clears nullable on reference types
        if en is not None and s['kind'] != 'ref':
            sn = bool(s.get('nullable'))
            if sn != en:
                add(key, 'nullability', n, 'nullable' if sn else 'not nullable', 'nullable' if en else 'not nullable (%s)' % p['type'],
                    f, l, 'medium' if conf0 != 'high' or c['kind'] in ('array', 'dict', 'any') else 'high')
        # required
        if p['required'] and n not in spec_required:
            add(key, 'required_mismatch', n, 'optional', 'required (%s)' % ('[Required]' if 'Required' in p['attributes'] else 'required modifier'),
                f, l, 'high')
        elif n in spec_required and not p['required']:
            add(key, 'required_mismatch', n, 'required', 'optional', f, l, 'medium')
        # constraints
        sp = spec_props[n]
        cst = ctx.consts
        if p.get('string_length') and p['string_length'].get('max') is not None:
            v, ok = const_value(p['string_length']['max'], decl, cst)
            if sp.get('maxLength') != v:
                add(key, 'constraint_missing_in_spec', n, sp.get('maxLength'), 'maxLength %s' % v, f, l, 'medium' if ok else 'low')
        if p.get('max_length') is not None:
            v, ok = const_value(p['max_length'], decl, cst)
            if sp.get('maxLength') != v and sp.get('maxItems') != v:
                add(key, 'constraint_missing_in_spec', n, sp.get('maxLength', sp.get('maxItems')), 'maxLength/maxItems %s' % v, f, l, 'medium' if ok else 'low')
        if p.get('min_length') is not None:
            v, ok = const_value(p['min_length'], decl, cst)
            if sp.get('minLength') != v and sp.get('minItems') != v:
                add(key, 'constraint_missing_in_spec', n, sp.get('minLength', sp.get('minItems')), 'minLength/minItems %s' % v, f, l, 'medium' if ok else 'low')
        if p.get('range'):
            lo, ok1 = const_value(p['range']['min'], decl, cst)
            hi, ok2 = const_value(p['range']['max'], decl, cst)
            if sp.get('minimum') != lo or sp.get('maximum') != hi:
                add(key, 'constraint_missing_in_spec', n, {'minimum': sp.get('minimum'), 'maximum': sp.get('maximum')},
                    'Range(%s, %s)' % (lo, hi), f, l, 'medium' if (ok1 and ok2) else 'low')
        if p.get('obsolete') and not sp.get('deprecated'):
            add(key, 'deprecated_not_marked', n, 'not deprecated', '[Obsolete]', f, l, 'medium')
    # class-level required in spec but property gone
    for n in sorted(spec_required - set(spec_props)):
        add(key, 'required_mismatch', n, 'required', 'no such property', file, line, 'medium')


def controller_refs(models, ctx, backend_hint=None):
    """Which parsed model types do controller action signatures mention (parameters and return types)?
    Returns {type_key: {controller names}}. Controllers themselves are skipped."""
    types = models['types']
    res = collections.defaultdict(set)
    for ck, cn in types.items():
        for m in cn.get('methods', []):
            for r in m.get('refs', []):
                t = types.get(r)
                if not t or r == ck:
                    continue
                if '/Controllers/' in '/' + t['file'] and t['name'].endswith('Controller'):
                    continue
                if t['kind'] == 'interface':
                    continue
                res[r].add(cn['name'])
    return res


def write_summary(out_dir, models, schemas, matched, diffs, unmatched_spec, no_schema, validation, chunk_files, by_schema):
    kinds = collections.Counter(d['kind'] for d in diffs)
    conf = collections.Counter(d['confidence'] for d in diffs)
    L = []
    w = L.append
    w('# Model versus spec: summary')
    w('')
    w('Generated by `tools/api-inventory/diff_schemas.py`. Internal working document.')
    w('')
    w('## Serializer facts the comparison relies on')
    w('')
    for e in models['serializer']['evidence']:
        w('- %s (%s)' % (e['finding'], ', '.join('`%s`' % x for x in e['where']) or 'no hit'))
    w('')
    w('Consequences: property names are camelCase using the Newtonsoft algorithm (`IPAddress` becomes `ipAddress`), enums are '
      'integers on the wire, and a spec enum lists member names while declaring `type: integer`. That quirk is the same for '
      'every enum and is reported once here, not as a diff per enum.')
    w('')
    w('## Counts')
    w('')
    w('- Source types parsed: %d (%s)' % (models['stats']['types'], ', '.join('%s %d' % kv for kv in models['stats']['kinds'].items())))
    w('- Spec schemas checked (spec plus supplement plus overlay): %d' % len(schemas))
    w('- Matched to a parsed class: %d' % len(matched))
    w('- Schemas with at least one diff: %d; total diffs: %d' % (len(by_schema), len(diffs)))
    w('- Diffs by confidence: ' + ', '.join('%s %d' % kv for kv in sorted(conf.items())))
    w('')
    w('| Kind | Count |')
    w('|---|---|')
    for k, c in sorted(kinds.items(), key=lambda kv: (-kv[1], kv[0])):
        w('| %s | %d |' % (k, c))
    w('')
    w('## Spec schemas with no matching class')
    w('')
    for k, title in (('external_framework', 'Framework types (System.*, Microsoft.*, third party): not checked'),
                     ('namespace_without_source', 'Namespace has no source in the export (cannot be checked)'),
                     ('no_class_found', 'Namespace is in the export but no class with that name')):
        items = unmatched_spec[k]
        w('### %s: %d' % (title, len(items)))
        w('')
        if k == 'external_framework':
            pref = collections.Counter('.'.join(x.split('`')[0].split('.')[:3]) for x in items)
            for p, c in sorted(pref.items()):
                w('- `%s` %d' % (p, c))
        else:
            for x in items[:200]:
                w('- `%s`' % (x if len(x) < 140 else x[:137] + '...'))
        w('')
    w('## Classes referenced by controllers with no spec schema')
    w('')
    if not no_schema:
        w('None found by the text scan.')
    for x in no_schema:
        w('- `%s` (%s) %s:%d' % (x['type'], x['kind'], x['file'], x['line']))
    w('')
    w('## Parser limits')
    w('')
    u = models['unresolved']
    w('- Base classes outside the export (properties inherited from them are unknown): %d types. External bases seen: %s'
      % (len(u['base_classes']), ', '.join(sorted({x['base'].split('<')[0] for x in u['base_classes']}))))
    w('- Ambiguous base class names: %d' % len(u['ambiguous_base']))
    w('- Enum members whose value could not be evaluated: %d' % len(u['enum_values']))
    w('- Parse errors: %d; files that failed: %d' % (len(u['parse_errors']), len(u['files_failed'])))
    w('')
    w('## Chunks')
    w('')
    for f in chunk_files:
        w('- `%s`' % f.name)
    extra = out_dir / 'parser-validation.md'
    if extra.exists():
        L.append('')
        L.append(extra.read_text().rstrip())
    (out_dir / 'summary.md').write_text('\n'.join(L) + '\n')


if __name__ == '__main__':
    main()
