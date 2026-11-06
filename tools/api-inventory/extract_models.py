#!/usr/bin/env python3
"""List every C# type (class, struct, record, interface, enum) in the Privilege Secure backend export.

Usage: extract_models.py <backend-export-dir> <out.json>

Reads the .cs files as text (no build, no network). It tokenizes each file (comments, string and
character literals, verbatim, interpolated and raw strings are handled before any brace matching),
parses namespaces and type declarations, and records for each type:
  fully qualified name (namespace + nesting), kind, base class and interfaces, generic parameters,
  public instance properties and fields (type, nullability, collection/element type, default,
  JSON-affecting attributes), enum members with numeric values, and the effective (inherited) members.

It resolves base classes by name against the types it parsed. Anything it cannot resolve is listed
under "unresolved" instead of being guessed.
"""
import json
import os
import pathlib
import re
import sys

# --------------------------------------------------------------------------------------------
# Lexer
# --------------------------------------------------------------------------------------------

ID_START = re.compile(r'[A-Za-z_@\u0080-￿]')
ID_CHAR = re.compile(r'[A-Za-z0-9_\u0080-￿]')


class Tok:
    __slots__ = ('k', 't', 'line', 'cond')

    def __init__(self, k, t, line, cond):
        self.k, self.t, self.line, self.cond = k, t, line, cond

    def __repr__(self):
        return '%s:%s@%d' % (self.k, self.t, self.line)


def skip_interp_hole(s, i, n):
    """s[i] is just after '{' of an interpolation hole. Return the index after the matching '}'."""
    depth = 1
    while i < n and depth:
        c = s[i]
        if c == '"':
            i = skip_string(s, i, n)
            continue
        if c == "'":
            i = skip_char(s, i, n)
            continue
        if c == '{':
            depth += 1
        elif c == '}':
            depth -= 1
        i += 1
    return i


def skip_char(s, i, n):
    i += 1
    while i < n:
        if s[i] == '\\':
            i += 2
            continue
        if s[i] == "'":
            return i + 1
        i += 1
    return i


def skip_string(s, i, n, verbatim=False, interp=False):
    """s[i] == '"'. Return index after the closing quote."""
    # raw string literal
    if s.startswith('"""', i):
        q = 0
        while i + q < n and s[i + q] == '"':
            q += 1
        end = s.find('"' * q, i + q)
        return n if end < 0 else end + q
    i += 1
    while i < n:
        c = s[i]
        if verbatim:
            if c == '"':
                if i + 1 < n and s[i + 1] == '"':
                    i += 2
                    continue
                return i + 1
        else:
            if c == '\\':
                i += 2
                continue
            if c == '"':
                return i + 1
        if interp and c == '{':
            if i + 1 < n and s[i + 1] == '{':
                i += 2
                continue
            i = skip_interp_hole(s, i + 1, n)
            continue
        i += 1
    return i


def lex(src):
    """Return (tokens, pp_lines). Comments are dropped, literals become single tokens."""
    toks = []
    n = len(src)
    i = 0
    line = 1
    if_depth = 0
    cond_if = []  # stack of bool: does this #if wrap non-trivial conditional code
    line_start = True
    while i < n:
        c = src[i]
        if c == '\n':
            line += 1
            i += 1
            line_start = True
            continue
        if c in ' \t\r﻿':
            i += 1
            continue
        if c == '#' and line_start:
            j = src.find('\n', i)
            j = n if j < 0 else j
            d = src[i:j].strip()
            m = re.match(r'#\s*(if|elif|else|endif)\b(.*)', d)
            if m:
                if m.group(1) == 'if':
                    cond_if.append(True)
                    if_depth += 1
                elif m.group(1) == 'endif':
                    if cond_if:
                        cond_if.pop()
                        if_depth -= 1
            i = j
            continue
        line_start = False
        if src.startswith('//', i):
            j = src.find('\n', i)
            i = n if j < 0 else j
            continue
        if src.startswith('/*', i):
            j = src.find('*/', i + 2)
            j = n if j < 0 else j + 2
            line += src.count('\n', i, j)
            i = j
            continue
        cond = if_depth > 0
        # string prefixes
        if c in '@$' and i + 1 < n and (src[i + 1] == '"' or (src[i + 1] in '@$' and i + 2 < n and src[i + 2] == '"')):
            j = i
            while src[j] in '@$':
                j += 1
            pre = src[i:j]
            e = skip_string(src, j, n, verbatim='@' in pre, interp='$' in pre)
            toks.append(Tok('str', src[i:e], line, cond))
            line += src.count('\n', i, e)
            i = e
            continue
        if c == '"':
            e = skip_string(src, i, n)
            toks.append(Tok('str', src[i:e], line, cond))
            line += src.count('\n', i, e)
            i = e
            continue
        if c == "'":
            e = skip_char(src, i, n)
            toks.append(Tok('chr', src[i:e], line, cond))
            i = e
            continue
        if ID_START.match(c):
            j = i + 1
            while j < n and ID_CHAR.match(src[j]):
                j += 1
            toks.append(Tok('id', src[i:j], line, cond))
            i = j
            continue
        if c.isdigit() or (c == '.' and i + 1 < n and src[i + 1].isdigit()):
            j = i + 1
            while j < n and (src[j].isalnum() or src[j] in '._'):
                if src[j] == '.' and not (j + 1 < n and src[j + 1].isdigit()):
                    break
                j += 1
            toks.append(Tok('num', src[i:j], line, cond))
            i = j
            continue
        two = src[i:i + 2]
        if two in ('=>', '::'):
            toks.append(Tok('p', two, line, cond))
            i += 2
            continue
        toks.append(Tok('p', c, line, cond))
        i += 1
    return toks


# --------------------------------------------------------------------------------------------
# Helpers
# --------------------------------------------------------------------------------------------

ACCESS = {'public', 'private', 'protected', 'internal'}
MODS = ACCESS | {'static', 'abstract', 'sealed', 'partial', 'new', 'readonly', 'unsafe', 'virtual', 'override',
                 'extern', 'async', 'required', 'volatile', 'const', 'ref', 'file', 'fixed', 'implicit', 'explicit'}
TYPE_KW = {'class', 'struct', 'interface', 'enum', 'record', 'delegate'}
PRIMS = {'bool', 'byte', 'sbyte', 'short', 'ushort', 'int', 'uint', 'long', 'ulong', 'float', 'double', 'decimal',
         'char', 'string', 'object', 'void', 'nint', 'nuint', 'dynamic'}


def join(toks):
    out = ''
    prev = None
    for t in toks:
        if prev is not None:
            if prev.k in ('id', 'num') and t.k in ('id', 'num'):
                out += ' '
            elif prev.t == ',' :
                out += ' '
        out += t.t
        prev = t
    return out


def camel(s):
    """Newtonsoft StringUtils.ToCamelCase (also what System.Text.Json CamelCase does for these inputs)."""
    if not s or not s[0].isupper():
        return s
    ch = list(s)
    for i in range(len(ch)):
        if i == 1 and not ch[i].isupper():
            break
        has_next = i + 1 < len(ch)
        if i > 0 and has_next and not ch[i + 1].isupper():
            if ch[i + 1].isspace():
                ch[i] = ch[i].lower()
            break
        ch[i] = ch[i].lower()
    return ''.join(ch)


def split_top(toks, sep=','):
    parts, cur, d = [], [], 0
    for t in toks:
        if t.k == 'p':
            if t.t in '([{':
                d += 1
            elif t.t in ')]}':
                d -= 1
            elif t.t == '<':
                d += 1
            elif t.t == '>':
                d -= 1
        if t.t == sep and t.k == 'p' and d == 0:
            parts.append(cur)
            cur = []
        else:
            cur.append(t)
    if cur:
        parts.append(cur)
    return parts


def lit(toks):
    """Evaluate a simple literal expression token list to python (str, int, float, bool) or raw text."""
    if not toks:
        return None
    if len(toks) == 1:
        t = toks[0]
        if t.k == 'str':
            s = t.t
            if s.startswith('"') and not s.startswith('"""'):
                try:
                    return json.loads(s)
                except Exception:
                    return s[1:-1]
            if s.startswith('@"'):
                return s[2:-1].replace('""', '"')
            return s
        if t.k == 'num':
            v = parse_int(t.t)
            if v is not None:
                return v
            try:
                return float(t.t.rstrip('fFdDmM'))
            except ValueError:
                return t.t
        if t.t in ('true', 'false'):
            return t.t == 'true'
    if len(toks) == 2 and toks[0].t == '-' and toks[1].k == 'num':
        v = lit(toks[1:])
        return -v if isinstance(v, (int, float)) else join(toks)
    return join(toks)


def parse_int(s):
    s = s.replace('_', '')
    s2 = re.sub(r'[uUlL]+$', '', s)
    try:
        if s2.lower().startswith('0x'):
            return int(s2, 16)
        if s2.lower().startswith('0b'):
            return int(s2[2:], 2)
        if re.fullmatch(r'\d+', s2):
            return int(s2)
    except ValueError:
        pass
    return None


# --------------------------------------------------------------------------------------------
# Parser
# --------------------------------------------------------------------------------------------

class FileParser:
    def __init__(self, toks, rel, global_usings):
        self.t = toks
        self.i = 0
        self.rel = rel
        self.types = []
        self.errors = []
        self.usings = list(global_usings)
        self.file_usings = []
        self.nrt = False
        self.record_methods = '/Controllers/' in ('/' + rel)
        self.pending = {}

    # basic cursor helpers
    def peek(self, k=0):
        j = self.i + k
        return self.t[j] if j < len(self.t) else Tok('eof', '', 0, False)

    def at(self, text, k=0):
        t = self.peek(k)
        return t.k in ('p', 'id') and t.t == text

    def skip_balanced(self, open_c, close_c):
        """cursor on open_c; move past matching close_c."""
        d = 0
        while self.i < len(self.t):
            t = self.t[self.i]
            if t.k == 'p':
                if t.t == open_c:
                    d += 1
                elif t.t == close_c:
                    d -= 1
                    if d == 0:
                        self.i += 1
                        return
            self.i += 1

    def collect_balanced(self, open_c, close_c):
        """cursor on open_c; return inner tokens and move past close."""
        start = self.i + 1
        self.skip_balanced(open_c, close_c)
        return self.t[start:self.i - 1]

    def skip_to_semicolon(self):
        d = 0
        while self.i < len(self.t):
            t = self.t[self.i]
            if t.k == 'p':
                if t.t in '([{':
                    d += 1
                elif t.t in ')]}':
                    d -= 1
                elif t.t == ';' and d <= 0:
                    self.i += 1
                    return
            self.i += 1

    # attributes
    def parse_attributes(self):
        attrs = []
        while self.at('[') and self.peek().k == 'p':
            inner = self.collect_balanced('[', ']')
            for part in split_top(inner):
                if not part:
                    continue
                target = None
                if len(part) > 2 and part[0].k == 'id' and part[1].t == ':' and part[1].k == 'p':
                    target = part[0].t
                    part = part[2:]
                j = 0
                name = ''
                while j < len(part) and (part[j].k == 'id' or part[j].t == '.'):
                    name += part[j].t
                    j += 1
                args = []
                named = {}
                if j < len(part) and part[j].t == '(':
                    depth = 0
                    k = j
                    for k in range(j, len(part)):
                        if part[k].k == 'p' and part[k].t == '(':
                            depth += 1
                        elif part[k].k == 'p' and part[k].t == ')':
                            depth -= 1
                    inner_args = part[j + 1:len(part) - 1] if part[-1].t == ')' else part[j + 1:]
                    for a in split_top(inner_args):
                        if len(a) >= 3 and a[0].k == 'id' and a[1].t == '=' and a[1].k == 'p' and not (len(a) > 2 and a[2].t == '='):
                            named[a[0].t] = lit(a[2:])
                        elif len(a) >= 3 and a[0].k == 'id' and a[1].t == ':' and a[1].k == 'p':
                            named[a[0].t] = lit(a[2:])
                        else:
                            args.append(lit(a))
                short = name.split('.')[-1]
                if short.endswith('Attribute') and len(short) > 9:
                    short = short[:-9]
                attrs.append({'name': short, 'args': args, 'named': named, 'target': target})
        return attrs

    def parse_modifiers(self):
        mods = []
        while self.peek().k == 'id' and self.peek().t in MODS:
            # 'new' before a type name could be a modifier only; 'ref' might begin a ref return type: keep as mod
            mods.append(self.peek().t)
            self.i += 1
        return mods

    # compilation unit
    def parse_unit(self):
        self.parse_scope(ns='', containers=[], top=True)

    def parse_scope(self, ns, containers, top=False):
        """Parse members until the closing brace of the current scope (or EOF at top level)."""
        while self.i < len(self.t):
            t = self.peek()
            if t.k == 'p' and t.t == '}':
                if top:
                    self.i += 1
                    continue
                return
            if t.k == 'p' and t.t == ';':
                self.i += 1
                continue
            start = self.i
            try:
                self.parse_member(ns, containers, top)
            except Exception as e:  # keep going, record the problem
                self.errors.append({'file': self.rel, 'line': self.peek().line, 'error': repr(e)})
                if self.i == start:
                    self.i += 1

    def parse_member(self, ns, containers, top):
        t = self.peek()
        if t.k == 'id':
            if t.t == 'using' or (t.t == 'global' and self.at('using', 1)):
                is_global = t.t == 'global'
                self.i += 2 if is_global else 1
                j = self.i
                self.skip_to_semicolon()
                body = self.t[j:self.i - 1]
                if body and body[0].t == 'static':
                    body = body[1:]
                if len(body) >= 2 and body[1].t == '=' and body[1].k == 'p':
                    pass  # alias
                else:
                    name = join(body)
                    (self.usings if is_global else self.file_usings).append(name)
                return
            if t.t == 'extern' and self.at('alias', 1):
                self.skip_to_semicolon()
                return
            if t.t == 'namespace':
                self.i += 1
                j = self.i
                while not (self.peek().k == 'p' and self.peek().t in '{;'):
                    self.i += 1
                name = join(self.t[j:self.i])
                full = (ns + '.' + name) if ns else name
                if self.peek().t == ';':
                    self.i += 1
                    # file-scoped: rest of file belongs to this namespace
                    self.parse_scope(full, containers, top=True)
                else:
                    self.i += 1
                    self.parse_scope(full, containers)
                    if self.peek().t == '}':
                        self.i += 1
                return
        attrs = self.parse_attributes()
        mods = self.parse_modifiers()
        t = self.peek()
        if t.k == 'id' and t.t in TYPE_KW:
            if t.t == 'delegate':
                self.skip_to_semicolon()
                return
            self.parse_type(ns, containers, attrs, mods)
            return
        if top:
            # statement-level garbage at top level (top-level statements); skip it
            self.i += 1
            return
        self.parse_class_member(ns, containers, attrs, mods)

    # type declarations
    def parse_type(self, ns, containers, attrs, mods):
        kw = self.peek().t
        line = self.peek().line
        cond = self.peek().cond
        self.i += 1
        kind = kw
        if kw == 'record':
            if self.peek().t in ('class', 'struct'):
                kind = 'record struct' if self.peek().t == 'struct' else 'record'
                self.i += 1
            else:
                kind = 'record'
        name_tok = self.peek()
        name = name_tok.t
        self.i += 1
        gparams = []
        if self.at('<'):
            inner = self.collect_balanced('<', '>')
            for p in split_top(inner):
                ids = [x.t for x in p if x.k == 'id' and x.t not in ('in', 'out')]
                if ids:
                    gparams.append(ids[-1])
        ctor_params = None
        if self.at('(') and kind in ('record', 'record struct', 'class', 'struct'):
            ctor_params = self.collect_balanced('(', ')')
        base_raw = []
        underlying = None
        if self.at(':') and self.peek().k == 'p':
            self.i += 1
            j = self.i
            while not ((self.peek().k == 'p' and self.peek().t in '{;') or self.at('where')):
                if self.peek().k == 'eof':
                    break
                if self.peek().k == 'p' and self.peek().t == '(':
                    self.skip_balanced('(', ')')
                    continue
                self.i += 1
            parts = split_top(self.t[j:self.i])
            base_raw = [join(p) for p in parts if p]
        while self.at('where'):
            while not (self.peek().k == 'p' and self.peek().t in '{;'):
                if self.peek().k == 'eof':
                    break
                self.i += 1
        if kind == 'enum' and base_raw:
            underlying = base_raw[0]
            base_raw = []
        full_name = ns
        chain = containers + [name]
        clr = (ns + '.' if ns else '') + '+'.join(chain)
        fqn = clr
        node = {
            'kind': kind, 'name': name, 'namespace': ns, 'container': '+'.join(containers) or None,
            'fqn': fqn, 'generic_params': gparams,
            'modifiers': mods, 'attributes': attrs, 'base_raw': base_raw,
            'file': self.rel, 'line': line, 'conditional': cond,
            'usings': list(self.usings) + list(self.file_usings),
            'properties': [], 'members': [], 'underlying': underlying, 'nrt': self.nrt,
            'unparsed_members': [],
        }
        if ctor_params is not None and kind in ('record', 'record struct'):
            for p in split_top(ctor_params):
                if not p:
                    continue
                pp = list(p)
                self_p = FileParser(pp, self.rel, [])
                pattrs = self_p.parse_attributes()
                rest = pp[self_p.i:]
                # strip modifiers like 'this', 'in', 'ref'
                eq = None
                for k, x in enumerate(rest):
                    if x.t == '=' and x.k == 'p':
                        eq = k
                        break
                head = rest[:eq] if eq is not None else rest
                default = join(rest[eq + 1:]) if eq is not None else None
                if len(head) >= 2 and head[-1].k == 'id':
                    pn = head[-1].t
                    ptype = join(head[:-1])
                    node['properties'].append(self.make_prop(pn, ptype, pattrs, ['public'], 'positional', ['get', 'init'],
                                                             default, head[-1].line, False, in_interface=False,
                                                             required_mod=False, positional=True))
        if self.at('{'):
            self.i += 1
            if kind == 'enum':
                self.parse_enum_body(node)
            else:
                self.parse_scope(ns, chain)
                # parse_scope appended nested types to self.types; members for this node come from class members
            if self.peek().t == '}':
                self.i += 1
        else:
            if self.peek().t == ';':
                self.i += 1
        # nested class members were parsed by parse_class_member into self.cur_members; attach by container
        node['_chain'] = chain
        self.types.append(node)

    def parse_enum_body(self, node):
        members = []
        next_val = 0
        known = {}
        while self.i < len(self.t) and not (self.peek().k == 'p' and self.peek().t == '}'):
            if self.peek().t == ',' and self.peek().k == 'p':
                self.i += 1
                continue
            attrs = self.parse_attributes()
            nt = self.peek()
            if nt.k != 'id':
                self.i += 1
                continue
            self.i += 1
            expr_text = None
            val = None
            if self.at('=') and self.peek().k == 'p':
                self.i += 1
                j = self.i
                d = 0
                while self.i < len(self.t):
                    x = self.t[self.i]
                    if x.k == 'p':
                        if x.t in '([{':
                            d += 1
                        elif x.t in ')]}':
                            if d == 0:
                                break
                            d -= 1
                        elif x.t == ',' and d == 0:
                            break
                    self.i += 1
                expr = self.t[j:self.i]
                expr_text = join(expr)
                val = eval_enum_expr(expr, known)
            else:
                val = next_val if next_val is not None else None
            if val is not None:
                known[nt.t] = val
                next_val = val + 1
            else:
                next_val = None
            m = {'name': nt.t, 'value': val, 'line': nt.line}
            if expr_text is not None:
                m['expr'] = expr_text
            if attrs:
                m['attributes'] = attrs
            members.append(m)
        node['members'] = members

    # members of classes/structs/interfaces/records
    def parse_class_member(self, ns, containers, attrs, mods):
        # find owning node later: we stash members in a side list keyed by containers chain
        start = self.i
        t0 = self.peek()
        if t0.k == 'p' and t0.t == '~':  # destructor
            self.skip_member_body()
            return
        # header scan
        j = self.i
        d = 0
        first_paren = None
        stop = None
        while j < len(self.t):
            x = self.t[j]
            if x.k == 'p':
                if x.t in '([':
                    if x.t == '(' and d == 0 and first_paren is None:
                        first_paren = j
                    d += 1
                elif x.t in ')]':
                    d -= 1
                elif d == 0 and x.t in ('{', ';', '=>', '='):
                    stop = j
                    break
                elif d < 0:
                    stop = j
                    break
            j += 1
        if stop is None:
            self.i = len(self.t)
            return
        header = self.t[self.i:stop]
        stop_t = self.t[stop].t
        htexts = [x.t for x in header]
        line = header[0].line if header else self.peek().line
        owner_chain = '+'.join(containers)
        owner_key = (ns, owner_chain)
        owner_kind_iface = False  # decided at attach time

        def add(prop):
            self.pending.setdefault(owner_key, []).append(prop)

        is_method = False
        if first_paren is not None and first_paren > self.i:
            prev = self.t[first_paren - 1]
            if prev.k == 'id' or prev.t == '>':
                is_method = True
        if 'operator' in htexts or 'event' in htexts and first_paren is None and stop_t != '{':
            is_method = True
        if 'event' in htexts:
            self.i = stop
            if stop_t == '{':
                self.skip_balanced('{', '}')
            else:
                self.skip_to_semicolon()
            return
        if is_method and first_paren is not None and first_paren > self.i and self.t[first_paren - 1].t.startswith('ShouldSerialize') \
                and self.t[first_paren - 1].t != 'ShouldSerialize' and self.t[first_paren + 1].t == ')':
            mname = self.t[first_paren - 1].t
            self.i = stop
            if stop_t == '{':
                body = ' '.join(x.t for x in self.collect_balanced('{', '}'))
            elif stop_t == '=>':
                j3 = self.i + 1
                self.skip_to_semicolon()
                body = 'return ' + ' '.join(x.t for x in self.t[j3:self.i - 1]) + ';'
            else:
                body = ''
                if stop_t == ';':
                    self.i += 1
            add(('ss', mname[len('ShouldSerialize'):], body, line))
            return
        if is_method:
            if self.record_methods and ('public' in mods) and first_paren is not None and \
                    any(a['name'].startswith('Http') or a['name'] == 'Route' for a in attrs):
                try:
                    name_i = first_paren - 1
                    if self.t[name_i].t == '>':
                        dd = 0
                        while name_i > self.i:
                            if self.t[name_i].t == '>':
                                dd += 1
                            elif self.t[name_i].t == '<':
                                dd -= 1
                                if dd == 0:
                                    name_i -= 1
                                    break
                            name_i -= 1
                    rtype = join(self.t[self.i:name_i])
                    save = self.i
                    self.i = first_paren
                    inner_p = self.collect_balanced('(', ')')
                    self.i = save
                    params = []
                    for prm in split_top(inner_p):
                        sub = FileParser(list(prm), self.rel, [])
                        pat = sub.parse_attributes()
                        rest = prm[sub.i:]
                        while rest and rest[0].t in ('this', 'ref', 'out', 'in', 'params'):
                            rest = rest[1:]
                        eq = next((k for k, x in enumerate(rest) if x.t == '=' and x.k == 'p'), None)
                        head = rest[:eq] if eq is not None else rest
                        if len(head) >= 2 and head[-1].k == 'id':
                            params.append({'type': join(head[:-1]), 'name': head[-1].t,
                                           'attrs': sorted(a['name'] for a in pat)})
                    add(('method', self.t[name_i].t, rtype, params, attrs, line))
                except Exception as e:
                    self.errors.append({'file': self.rel, 'line': line, 'error': 'method signature: ' + repr(e)})
            self.i = stop
            if stop_t == '{':
                self.skip_balanced('{', '}')
            elif stop_t == '=>':
                self.skip_to_semicolon()
            elif stop_t == ';':
                self.i += 1
            elif stop_t == '=':  # default in odd places
                self.skip_to_semicolon()
            return
        if not header:
            self.i = stop + 1 if stop_t == ';' else stop
            if stop_t == '{':
                self.skip_balanced('{', '}')
            return
        # strip leading 'ref' etc handled by modifiers; header = type + name(s)
        if stop_t == '{':
            # property (or indexer)
            name_tok = header[-1]
            if name_tok.t == 'this' or (len(header) >= 2 and header[-2].t == '.') :
                self.i = stop
                self.skip_balanced('{', '}')
                return
            if header[-1].t == ']':  # indexer 'this[...]'
                self.i = stop
                self.skip_balanced('{', '}')
                return
            ptype = join(header[:-1])
            self.i = stop
            inner = self.collect_balanced('{', '}')
            accessors = parse_accessors(inner)
            default = None
            if self.at('=') and self.peek().k == 'p':
                self.i += 1
                j2 = self.i
                self.skip_to_semicolon()
                default = join(self.t[j2:self.i - 1])
            add(('prop', name_tok.t, ptype, attrs, mods, 'property', accessors, default, name_tok.line, name_tok.cond))
            return
        if stop_t == '=>':
            name_tok = header[-1]
            ptype = join(header[:-1])
            self.i = stop
            self.skip_to_semicolon()
            if name_tok.t != 'this' and not (len(header) >= 2 and header[-2].t == '.') and header[-1].t != ']':
                add(('prop', name_tok.t, ptype, attrs, mods, 'property', ['get'], None, name_tok.line, name_tok.cond))
            return
        # field(s)
        self.i = stop
        default = None
        if stop_t == '=':
            self.i += 1
            j2 = self.i
            self.skip_to_semicolon()
            body = self.t[j2:self.i - 1]
            default = join(body)
            # multiple declarators with initializers: 'int a = 1, b = 2;' - split at top-level commas
            more = split_top(body)
            names_extra = []
            for p in more[1:]:
                if len(p) >= 1 and p[0].k == 'id':
                    names_extra.append(p[0].t)
            if more:
                default = join(more[0])
        else:
            self.i += 1
            names_extra = []
        # header may be 'Type a, b'
        parts = split_top(header)
        first = parts[0]
        if len(first) < 2:
            return
        fname = first[-1].t
        ftype = join(first[:-1])
        add(('prop', fname, ftype, attrs, mods, 'field', None, default, first[-1].line, first[-1].cond))
        for p in parts[1:]:
            if p and p[0].k == 'id':
                add(('prop', p[0].t, ftype, attrs, mods, 'field', None, None, p[0].line, p[0].cond))
        for nm in names_extra:
            add(('prop', nm, ftype, attrs, mods, 'field', None, None, line, False))

    def skip_member_body(self):
        while self.i < len(self.t):
            x = self.t[self.i]
            if x.k == 'p' and x.t == '{':
                self.skip_balanced('{', '}')
                return
            if x.k == 'p' and x.t == ';':
                self.i += 1
                return
            if x.k == 'p' and x.t == '(':
                self.skip_balanced('(', ')')
                continue
            self.i += 1

    def make_prop(self, name, ptype, attrs, mods, kind, accessors, default, line, cond, in_interface,
                  required_mod=False, positional=False):
        return finalize_prop(name, ptype, attrs, mods, kind, accessors, default, line, cond, in_interface,
                             self.nrt, positional)


def parse_accessors(inner):
    """Return list like ['get', 'set'] or ['get', 'private set'] from the tokens inside { } of a property."""
    res = []
    i = 0
    n = len(inner)
    d = 0
    mods = []
    while i < n:
        x = inner[i]
        if x.k == 'p' and x.t == '[':
            dd = 0
            while i < n:
                if inner[i].t == '[' and inner[i].k == 'p':
                    dd += 1
                elif inner[i].t == ']' and inner[i].k == 'p':
                    dd -= 1
                    if dd == 0:
                        i += 1
                        break
                i += 1
            continue
        if x.k == 'id' and x.t in ACCESS:
            mods.append(x.t)
            i += 1
            continue
        if x.k == 'id' and x.t in ('get', 'set', 'init', 'add', 'remove'):
            res.append((' '.join(mods) + ' ' + x.t).strip())
            mods = []
            i += 1
            # skip body
            if i < n and inner[i].k == 'p' and inner[i].t == '{':
                dd = 0
                while i < n:
                    if inner[i].k == 'p' and inner[i].t == '{':
                        dd += 1
                    elif inner[i].k == 'p' and inner[i].t == '}':
                        dd -= 1
                        if dd == 0:
                            i += 1
                            break
                    i += 1
            elif i < n and inner[i].t == '=>':
                while i < n and not (inner[i].k == 'p' and inner[i].t == ';'):
                    i += 1
                i += 1
            elif i < n and inner[i].t == ';':
                i += 1
            continue
        i += 1
    return res


# --------------------------------------------------------------------------------------------
# Property finalization
# --------------------------------------------------------------------------------------------

JSON_IGNORE = {'JsonIgnore', 'IgnoreDataMember'}
COLLECTION_NAMES = {'List', 'IList', 'IEnumerable', 'ICollection', 'HashSet', 'ISet', 'IReadOnlyList',
                    'IReadOnlyCollection', 'Collection', 'ObservableCollection', 'Queue', 'Stack', 'LinkedList',
                    'SortedSet', 'ReadOnlyCollection', 'ImmutableArray', 'ImmutableList', 'IAsyncEnumerable',
                    'ICollection', 'IReadOnlySet', 'SortedList'}
DICT_NAMES = {'Dictionary', 'IDictionary', 'IReadOnlyDictionary', 'SortedDictionary', 'ConcurrentDictionary',
              'ImmutableDictionary', 'Hashtable'}


FRAMEWORK_NAMES = (COLLECTION_NAMES | DICT_NAMES | {
    'Nullable', 'Task', 'ValueTask', 'Lazy', 'Tuple', 'ValueTuple', 'KeyValuePair', 'Guid', 'DateTime', 'DateTimeOffset',
    'TimeSpan', 'DateOnly', 'TimeOnly', 'Uri', 'Version', 'JObject', 'JToken', 'JArray', 'JValue', 'JsonElement',
    'JsonNode', 'JsonObject', 'IFormFile', 'Stream', 'Type', 'Action', 'Func', 'IPAddress', 'CancellationToken',
    'ArrayList', 'ExpandoObject', 'DayOfWeek'})


def split_generic_args(s):
    """'Dictionary<string, List<int>>' -> ('Dictionary', ['string', 'List<int>'])"""
    s = s.strip()
    i = s.find('<')
    if i < 0:
        return s, []
    j = s.rfind('>')
    name = s[:i]
    inner = s[i + 1:j]
    args, cur, d = [], '', 0
    for c in inner:
        if c == '<':
            d += 1
        elif c == '>':
            d -= 1
        if c == ',' and d == 0:
            args.append(cur.strip())
            cur = ''
        else:
            cur += c
    if cur.strip():
        args.append(cur.strip())
    return name, args


def analyze_type(ts):
    """Return dict(base, nullable_explicit, collection, element, key, args) for a C# type string."""
    s = ts.strip()
    res = {'nullable_explicit': False, 'collection': None, 'element': None, 'key': None}
    s = re.sub(r'^(global::)', '', s)
    if s.endswith('?'):
        res['nullable_explicit'] = True
        s = s[:-1]
    m = re.match(r'^(.*)\[[,\s]*\]$', s)
    if m:
        res['collection'] = 'array'
        res['element'] = m.group(1)
        res['base'] = s
        return res
    name, args = split_generic_args(s)
    short = name.split('.')[-1]
    if short == 'Nullable' and len(args) == 1:
        res['nullable_explicit'] = True
        inner = analyze_type(args[0])
        inner['nullable_explicit'] = True
        return inner
    res['base'] = s
    if short in DICT_NAMES and len(args) == 2:
        res['collection'] = 'dictionary'
        res['key'] = args[0]
        res['element'] = args[1]
    elif short in COLLECTION_NAMES and len(args) == 1:
        res['collection'] = 'array'
        res['element'] = args[0]
    elif short in ('IEnumerable', 'IList', 'ICollection', 'ArrayList') and not args:
        res['collection'] = 'array'
        res['element'] = 'object'
    return res


def finalize_prop(name, ptype, attrs, mods, kind, accessors, default, line, cond, in_interface, nrt, positional):
    a = analyze_type(ptype)
    names = {x['name']: x for x in attrs}
    p = {
        'name': name, 'type': ptype, 'kind': kind, 'line': line,
        'nullable_explicit': a['nullable_explicit'], 'collection': a['collection'], 'element': a['element'],
        'dict_key': a['key'], 'default': default, 'conditional': bool(cond), 'nrt': nrt,
        'modifiers': mods,
    }
    if ptype.endswith('?') and nrt:
        p['nrt_nullable_ref'] = True
    acc = accessors or []
    getter = None
    setter = None
    for x in acc:
        parts = x.split()
        if parts[-1] == 'get':
            getter = parts[:-1]
        elif parts[-1] in ('set', 'init'):
            setter = parts[:-1]
            p['init_only'] = parts[-1] == 'init'
    if kind == 'property':
        p['has_getter'] = getter is not None
        p['has_setter'] = setter is not None
        p['setter_restricted'] = bool(setter) and bool(set(setter) & {'private', 'protected', 'internal'})
        p['getter_restricted'] = bool(getter) and bool(set(getter) & {'private', 'protected', 'internal'})
    mset = set(mods)
    if in_interface:
        public = not (mset & (ACCESS - {'public'}))
    else:
        public = 'public' in mset and not (mset & {'private'})
    if 'protected' in mset or ('internal' in mset and 'public' not in mset):
        public = False
    p['public'] = public
    p['static'] = 'static' in mset or 'const' in mset
    p['override'] = 'override' in mset
    p['new'] = 'new' in mset
    p['abstract'] = 'abstract' in mset
    p['required_modifier'] = 'required' in mset
    p['readonly_field'] = 'readonly' in mset
    # contract attributes
    ca = {}
    for x in attrs:
        n = x['name']
        if n in ('Required', 'JsonRequired', 'StringLength', 'MaxLength', 'MinLength', 'Range', 'JsonProperty',
                 'JsonPropertyName', 'JsonIgnore', 'IgnoreDataMember', 'DataMember', 'EnumDataType', 'Obsolete',
                 'JsonConverter', 'JsonExtensionData', 'EmailAddress', 'RegularExpression', 'NotMapped',
                 'Key', 'DefaultValue', 'JsonInclude', 'NonSerialized', 'Display', 'Description', 'Column',
                 'ForeignKey', 'Url', 'Phone', 'Compare', 'CreditCard', 'TsProperty', 'TsIgnore', 'TsDecorator'):
            ca.setdefault(n, []).append({'args': x['args'], 'named': x['named'], 'target': x['target']})
    p['attributes'] = ca
    p['ignored'] = any(k in ca for k in JSON_IGNORE | {'NonSerialized'}) or \
        any(x['target'] == 'property' and x['name'] in JSON_IGNORE for x in attrs)
    # which library does the ignore come from is decided at diff time (both listed)
    p['ignored_by'] = sorted(k for k in ca if k in ('JsonIgnore', 'IgnoreDataMember', 'NonSerialized'))
    p['required'] = ('Required' in ca) or ('JsonRequired' in ca) or p['required_modifier']
    jn = None
    for key in ('JsonProperty', 'JsonPropertyName'):
        if key in ca:
            e = ca[key][0]
            if e['args'] and isinstance(e['args'][0], str):
                jn = e['args'][0]
            elif 'PropertyName' in e['named']:
                jn = e['named']['PropertyName']
            p['json_name_source'] = key
    p['json_name'] = jn
    if 'DataMember' in ca:
        e = ca['DataMember'][0]
        p['data_member_name'] = e['named'].get('Name')
    sl = ca.get('StringLength')
    if sl:
        e = sl[0]
        p['string_length'] = {'max': e['args'][0] if e['args'] else None, 'min': e['named'].get('MinimumLength')}
    ml = ca.get('MaxLength')
    if ml:
        p['max_length'] = ml[0]['args'][0] if ml[0]['args'] else None
    mn = ca.get('MinLength')
    if mn:
        p['min_length'] = mn[0]['args'][0] if mn[0]['args'] else None
    rg = ca.get('Range')
    if rg and len(rg[0]['args']) >= 2:
        p['range'] = {'min': rg[0]['args'][0], 'max': rg[0]['args'][1]}
    ed = ca.get('EnumDataType')
    if ed:
        p['enum_data_type'] = ed[0]['args'][0] if ed[0]['args'] else None
    if 'Obsolete' in ca:
        p['obsolete'] = True
    if 'JsonConverter' in ca:
        p['json_converter'] = ca['JsonConverter'][0]['args'][0] if ca['JsonConverter'][0]['args'] else True
    return p


# --------------------------------------------------------------------------------------------
# Enum expression evaluation
# --------------------------------------------------------------------------------------------

def eval_enum_expr(toks, known):
    """Evaluate integer expressions: literals, |, &, ^, <<, >>, +, -, ~, parens, earlier member names."""
    texts = []
    for t in toks:
        if t.k == 'num':
            v = parse_int(t.t)
            if v is None:
                return None
            texts.append(str(v))
        elif t.k == 'id':
            nm = t.t.split('.')[-1]
            if t.t in known:
                texts.append(str(known[t.t]))
            else:
                return None
        elif t.k == 'chr':
            return None
        elif t.k == 'p' and t.t in '|&^<>+-~()*':
            texts.append(t.t)
        else:
            return None
    # collapse '.' not expected; identifiers like Foo.Bar -> lexed as id . id -> '.' makes None via the else
    expr = ' '.join(texts)
    if not re.fullmatch(r'[\d\s|&^<>+\-~()*]+', expr):
        return None
    try:
        return int(eval(expr, {'__builtins__': {}}, {}))
    except Exception:
        return None


# --------------------------------------------------------------------------------------------
# Whole-export driver
# --------------------------------------------------------------------------------------------

def collect_global_usings(files_tokens):
    res = {}
    for rel, toks in files_tokens.items():
        top = rel.split('/')[0]
        i = 0
        while i < len(toks) - 1:
            if toks[i].t == 'global' and toks[i + 1].t == 'using':
                j = i + 2
                while j < len(toks) and toks[j].t != ';':
                    j += 1
                body = [x for x in toks[i + 2:j] if x.t != 'static']
                if not any(x.t == '=' for x in body):
                    res.setdefault(top, []).append(join(body))
                i = j
            i += 1
    return res


def parse_file(rel, toks, global_usings):
    fp = FileParser(toks, rel, global_usings)
    fp.pending = {}
    # file-level nullable context
    fp.nrt = False
    fp.parse_unit()
    return fp


def read_text(p):
    b = p.read_bytes()
    for enc in ('utf-8-sig', 'utf-16', 'latin-1'):
        try:
            return b.decode(enc)
        except Exception:
            continue
    return b.decode('latin-1')


def main():
    root = pathlib.Path(sys.argv[1]).resolve()
    out = pathlib.Path(sys.argv[2])
    files = sorted(p for p in root.rglob('*.cs') if not any(x in p.parts for x in ('bin', 'obj', 'node_modules', 'ClientApp')))
    toks_by_file = {}
    nrt_files = set()
    for p in files:
        rel = p.relative_to(root).as_posix()
        text = read_text(p)
        if re.search(r'^\s*#nullable\s+enable', text, re.M):
            nrt_files.add(rel)
        toks_by_file[rel] = lex(text)
    gus = collect_global_usings(toks_by_file)
    all_types = []
    errors = []
    unparsed_files = []
    for rel, toks in toks_by_file.items():
        top = rel.split('/')[0]
        fp = FileParser(toks, rel, gus.get(top, []))
        fp.pending = {}
        fp.nrt = rel in nrt_files
        try:
            fp.parse_unit()
        except Exception as e:
            unparsed_files.append({'file': rel, 'error': repr(e)})
        errors.extend(fp.errors)
        # attach pending members to the type nodes
        by_key = {}
        for node in fp.types:
            by_key.setdefault((node['namespace'], '+'.join(node['_chain'])), []).append(node)
        for key, items in fp.pending.items():
            nodes = by_key.get(key)
            if not nodes:
                errors.append({'file': rel, 'error': 'members with no owning type', 'owner': key[1], 'count': len(items)})
                continue
            node = nodes[0]
            iface = node['kind'] == 'interface'
            for item in items:
                if item[0] == 'ss':
                    node.setdefault('should_serialize', {})[item[1]] = {
                        'body': item[2][:300], 'always_false': item[2].replace(' ', '') in ('returnfalse;', 'returnfalse')
                        , 'line': item[3]}
                    continue
                if item[0] == 'method':
                    node.setdefault('methods', []).append({'name': item[1], 'returns': item[2], 'params': item[3],
                                                           'attributes': [a['name'] for a in item[4]], 'line': item[5]})
                    continue
                (_, name, ptype, attrs, mods, kind, acc, default, line, cond) = item
                node['properties'].append(finalize_prop(name, ptype, attrs, mods, kind, acc, default, line, cond,
                                                         iface, node['nrt'], False))
        all_types.extend(fp.types)

    # merge partial / duplicate declarations by fqn+arity
    merged = {}
    for node in all_types:
        node.pop('_chain', None)
        key = node['fqn'] + '`%d' % len(node['generic_params']) if node['generic_params'] else node['fqn']
        node['clr_name'] = key
        if key in merged:
            m = merged[key]
            m.setdefault('also_declared_in', []).append({'file': node['file'], 'line': node['line']})
            have = {p['name'] for p in m['properties']}
            for p in node['properties']:
                if p['name'] not in have:
                    m['properties'].append(p)
                    have.add(p['name'])
            have_m = {x['name'] for x in m['members']}
            for x in node['members']:
                if x['name'] not in have_m:
                    m['members'].append(x)
            for b in node['base_raw']:
                if b not in m['base_raw']:
                    m['base_raw'].append(b)
            m['attributes'] = m['attributes'] + [a for a in node['attributes'] if a not in m['attributes']]
            m['usings'] = sorted(set(m['usings']) | set(node['usings']))
            m['partial_merged'] = True
            if node.get('should_serialize'):
                m.setdefault('should_serialize', {}).update(node['should_serialize'])
        else:
            merged[key] = node
    # dedupe members repeated by #if branches
    for m in merged.values():
        seen = set()
        props = []
        for p in m['properties']:
            k = p['name']
            if k in seen:
                for q in props:
                    if q['name'] == k:
                        q['duplicate_declaration'] = True
                continue
            seen.add(k)
            props.append(p)
        m['properties'] = props

    types = merged
    # --- name index for resolution
    by_simple = {}
    by_fqn_noarity = {}
    for key, n in types.items():
        by_simple.setdefault(n['name'], []).append(key)
        by_fqn_noarity.setdefault(n['fqn'], []).append(key)

    def resolve(tname, node):
        """Resolve a C# type name string used inside `node` to a key in `types`. Returns (key|None, status)."""
        base, args = split_generic_args(tname.strip().rstrip('?'))
        base = re.sub(r'^global::', '', base)
        arity = len(args)
        want = lambda k: types[k]['fqn'] + ('`%d' % arity if arity else '')
        def pick(fq):
            for k in by_fqn_noarity.get(fq, []):
                if len(types[k]['generic_params']) == arity:
                    return k
            return None
        if '.' in base:
            parts = base.split('.')
            # try as namespace-qualified or Outer.Inner under context
            cands = []
            ctxs = namespace_chain(node)
            for c in ctxs + [''] + node['usings']:
                fq = ((c + '.') if c else '') + parts[0]
                if len(parts) > 1:
                    # nested: Outer.Inner -> Outer+Inner
                    fq_nested = fq + '+' + '+'.join(parts[1:])
                    k = pick(fq_nested)
                    if k:
                        cands.append(k)
                    k = pick(((c + '.') if c else '') + base)
                    if k:
                        cands.append(k)
            if cands:
                u = list(dict.fromkeys(cands))
                return (u[0], 'ok') if len(u) == 1 else (u[0], 'ambiguous')
            k = pick(base)
            if k:
                return k, 'ok'
            return None, 'unresolved'
        # simple name: nested in same container chain, then namespace chain, then usings
        ns = node['namespace']
        cont = node['container']
        chain = []
        if cont:
            parts = cont.split('+')
            for i in range(len(parts), 0, -1):
                chain.append((ns + '.' if ns else '') + '+'.join(parts[:i]) + '+' + base)
        chain_self = (ns + '.' if ns else '') + ((cont + '+') if cont else '') + node['name'] + '+' + base
        for fq in [chain_self] + chain:
            k = pick(fq)
            if k:
                return k, 'ok'
        for c in namespace_chain(node):
            k = pick((c + '.' if c else '') + base)
            if k:
                return k, 'ok'
        hits = []
        for u in node['usings']:
            k = pick(u + '.' + base)
            if k:
                hits.append(k)
        hits = list(dict.fromkeys(hits))
        if len(hits) == 1:
            return hits[0], 'ok'
        if len(hits) > 1:
            return hits[0], 'ambiguous'
        # unique simple name anywhere
        c2 = [k for k in by_simple.get(base, []) if len(types[k]['generic_params']) == arity]
        if len(c2) == 1:
            return c2[0], 'by-unique-simple-name'
        if len(c2) > 1:
            return None, 'ambiguous:' + ','.join(sorted(c2))
        return None, 'unresolved'

    def namespace_chain(node):
        ns = node['namespace']
        res = []
        parts = ns.split('.') if ns else []
        for i in range(len(parts), 0, -1):
            res.append('.'.join(parts[:i]))
        return res

    unresolved = {'base': [], 'ambiguous_base': [], 'enum_values': [], 'property_types': []}
    for key, n in sorted(types.items()):
        n['interfaces'] = []
        n['base'] = None
        n['base_type_args'] = []
        n['base_status'] = None
        if n['kind'] in ('class', 'record', 'struct', 'record struct', 'interface'):
            first_class_found = False
            for idx, braw in enumerate(n['base_raw']):
                k, status = resolve(braw, n)
                nm = split_generic_args(braw)[0].split('.')[-1]
                if k:
                    tk = types[k]['kind']
                    if tk == 'interface':
                        n['interfaces'].append(k)
                    elif n['kind'] != 'interface' and not first_class_found and idx == 0:
                        n['base'] = k
                        n['base_type_args'] = split_generic_args(braw)[1]
                        n['base_status'] = status
                        first_class_found = True
                    else:
                        n['interfaces'].append(k)
                    if status.startswith('ambiguous'):
                        unresolved['ambiguous_base'].append({'type': key, 'base': braw, 'status': status})
                else:
                    looks_iface = bool(re.match(r'^I[A-Z]', nm))
                    if idx == 0 and not looks_iface and n['kind'] != 'interface':
                        n['base_status'] = 'external-or-unresolved'
                        n['base_external'] = braw
                        unresolved['base'].append({'type': key, 'base': braw, 'status': status,
                                                    'file': n['file'], 'line': n['line']})
                    else:
                        n['interfaces'].append(braw)
        else:
            n['base_raw'] = n['base_raw']
        if n['kind'] == 'enum':
            for m in n['members']:
                if m['value'] is None:
                    unresolved['enum_values'].append({'type': key, 'member': m['name'], 'expr': m.get('expr'),
                                                       'file': n['file'], 'line': m['line']})

    # --- effective properties (inherited)
    def own_serialized(p):
        return p['public'] and not p['static']

    def effective(key, seen=None, subst=None):
        n = types[key]
        seen = seen or set()
        if key in seen:
            return []
        seen = seen | {key}
        res = []
        for p in n['properties']:
            q = dict(p)
            q['declared_in'] = key
            ctx = n
            if subst:
                q['type'] = apply_subst(q['type'], subst)
                if q.get('element'):
                    q['element'] = apply_subst(q['element'], subst)
                ctx = top_node[0]
            refs = {}
            collect_refs(q['type'], ctx, n, refs, bool(subst))
            q['refs'] = refs
            res.append(q)
        if n['base']:
            b = types[n['base']]
            sub = {}
            if b['generic_params'] and n['base_type_args']:
                sub = dict(zip(b['generic_params'], n['base_type_args']))
                if subst:
                    sub = {k: apply_subst(v, subst) for k, v in sub.items()}
            elif subst:
                sub = subst
            names = {p['name'] for p in res}
            for q in effective(n['base'], seen, sub or None):
                if q['name'] not in names:
                    res.append(q)
                    names.add(q['name'])
        return res

    top_node = [None]

    def collect_refs(ts, ctx, decl, refs, substituted):
        """Resolve every named type inside a type string. refs maps the type text to a types key,
        'generic-param', 'primitive', or None (unresolved)."""
        ts = ts.strip()
        if ts.endswith('?'):
            ts = ts[:-1]
        m = re.match(r'^(.*)\[[,\s]*\]$', ts)
        if m:
            collect_refs(m.group(1), ctx, decl, refs, substituted)
            return
        name, args = split_generic_args(ts)
        if name in PRIMS:
            refs[ts] = 'primitive'
            return
        if not args and name in decl['generic_params']:
            refs[ts] = 'generic-param'
            return
        k, status = resolve(ts, ctx)
        if k is None and name.split('.')[-1] in FRAMEWORK_NAMES:
            refs[ts] = 'framework'
            for a in args:
                collect_refs(a, ctx, decl, refs, substituted)
            return
        refs[ts] = k
        if k is None:
            refs.setdefault('__status__', {})[ts] = status
        elif status != 'ok':
            refs.setdefault('__status__', {})[ts] = status
        for a in args:
            collect_refs(a, ctx, decl, refs, substituted)

    def apply_subst(s, sub):
        for k, v in sub.items():
            s = re.sub(r'(?<![\w.])%s(?![\w])' % re.escape(k), v, s)
        return s

    for key, n in types.items():
        if n['kind'] == 'enum':
            continue
        top_node[0] = n
        eff = effective(key)
        n['effective_properties'] = eff

    # controller action signatures: which model types they mention
    for key, n in types.items():
        for mth in n.get('methods', []):
            refs = {}
            collect_refs(mth['returns'], n, n, refs, False)
            for prm in mth['params']:
                collect_refs(prm['type'], n, n, refs, False)
            mth['refs'] = sorted({v for k, v in refs.items() if k != '__status__' and v not in (None, 'primitive', 'generic-param')})

    # inheritance chain unresolved flag
    def chain_complete(key):
        seen = set()
        while key and key not in seen:
            seen.add(key)
            n = types[key]
            if n.get('base_status') == 'external-or-unresolved':
                return False
            key = n['base']
        return True

    for key, n in types.items():
        n['inheritance_complete'] = chain_complete(key)

    # --- JSON serializer facts found in source
    serializer = serializer_facts(root)

    # --- summary
    kinds = {}
    for n in types.values():
        kinds[n['kind']] = kinds.get(n['kind'], 0) + 1
    result = {
        'serializer': serializer,
        'stats': {
            'files_scanned': len(files),
            'types': len(types),
            'kinds': dict(sorted(kinds.items())),
            'properties_declared': sum(len(n['properties']) for n in types.values()),
            'enum_members': sum(len(n['members']) for n in types.values()),
            'parse_errors': len(errors),
            'files_failed': len(unparsed_files),
        },
        'unresolved': {
            'base_classes': sorted(unresolved['base'], key=lambda x: x['type']),
            'ambiguous_base': sorted(unresolved['ambiguous_base'], key=lambda x: x['type']),
            'enum_values': sorted(unresolved['enum_values'], key=lambda x: (x['type'], x['member'])),
            'parse_errors': sorted(errors, key=lambda x: (x.get('file', ''), x.get('line', 0))),
            'files_failed': unparsed_files,
        },
        'types': {k: types[k] for k in sorted(types)},
    }
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(result, indent=1, sort_keys=True, ensure_ascii=False) + '\n', encoding='utf-8')
    print(json.dumps(result['stats'], sort_keys=True))


def serializer_facts(root):
    """Record what the source says about JSON serialization, so the diff does not have to guess."""
    facts = {'evidence': [], 'mvc_serializer': 'Newtonsoft.Json (AddNewtonsoftJson)',
             'property_naming': 'camelCase', 'enum_serialization': 'integer',
             'swagger_generator_serializer': 'System.Text.Json (no AddSwaggerGenNewtonsoftSupport found)'}
    def grep(pattern, limit=8):
        hits = []
        rx = re.compile(pattern)
        for p in sorted(root.rglob('*.cs')):
            if any(x in p.parts for x in ('bin', 'obj', 'node_modules', 'ClientApp')):
                continue
            try:
                for ln, line in enumerate(read_text(p).splitlines(), 1):
                    if rx.search(line):
                        hits.append('%s:%d' % (p.relative_to(root).as_posix(), ln))
                        if len(hits) >= limit:
                            return hits
            except Exception:
                pass
        return hits
    ev = facts['evidence']
    nj = grep(r'AddNewtonsoftJson\(')
    ev.append({'finding': 'MVC controllers use Newtonsoft.Json; only ReferenceLoopHandling and DateTimeZoneHandling are customized, '
                          'no ContractResolver or NamingStrategy override, so MVC defaults apply: camelCase property names',
               'where': nj})
    sc = grep(r'StringEnumConverter|JsonStringEnumConverter')
    ev.append({'finding': 'No StringEnumConverter or JsonStringEnumConverter anywhere in the export: enums travel as integers'
                          if not sc else 'string enum converter present', 'where': sc})
    jc = grep(r'\[\s*(?:[A-Za-z.]+\s*,\s*)*JsonConverter')
    ev.append({'finding': 'JsonConverter attribute usage (per-type or per-property overrides)', 'where': jc})
    sw = grep(r'AddSwaggerGenNewtonsoftSupport')
    ev.append({'finding': 'Swagger Newtonsoft support not enabled: the OpenAPI generator describes the System.Text.Json contract; '
                          '[JsonProperty], Newtonsoft [JsonIgnore] and public fields are invisible to it' if not sw else 'swagger newtonsoft support present',
               'where': sw})
    ef = grep(r'class EnumSchemaFilter')
    ev.append({'finding': 'EnumSchemaFilter replaces the enum value list with member NAMES while the schema type stays integer; '
                          'the wire value is still the integer', 'where': ef})
    ev.append({'finding': 'CustomSchemaIds(x => x.FullName): schema keys are CLR full names (nested types use +, generics are assembly-qualified)',
               'where': grep(r'CustomSchemaIds')})
    nr = grep(r'^\s*#nullable\s+enable')
    ev.append({'finding': 'Nullable reference types are off except in the files listed here: unannotated reference types are '
                          'nullable in the generated spec', 'where': nr})
    return facts


if __name__ == '__main__':
    main()
