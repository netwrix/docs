---
title: "Kubernetes"
description: "Connect a Kubernetes cluster to AI Security with a read-only service account token so it can read workloads, service accounts, roles, and network policies."
sidebar_position: 62
---

# Kubernetes

Connect Kubernetes so AI Security can read one cluster through its API server. AI Security signs in with a token for a service account bound to a read-only cluster role. You create the service account and the role in the cluster, create a token for it, and enter it in 1Secure. One token reads one cluster, so connect each cluster as its own source.

AI agents often run as ordinary workloads in a cluster. The cluster is the one place that knows which service account each agent runs as, which cloud identity that account maps to, and what its roles let it do.

## Before you start

- Know the cluster's API server address, for example `https://k8s.example.com:6443`. Your kubeconfig holds it as the cluster's `server`.
- Have rights in the cluster to create a service account, a cluster role, and a cluster role binding.
- If the cluster's own authority issues the API server's certificate, which is the usual case, have that authority's certificate as PEM text. Your kubeconfig holds it, base64 encoded, as `certificate-authority-data`.

## Create the service account token in Kubernetes

1. Save the following as `onesecure-ai-security.yaml`. It creates a namespace, a service account, a cluster role that can only get and list the resources AI Security reads, and a binding between them.

   ```yaml
   apiVersion: v1
   kind: Namespace
   metadata:
     name: onesecure-ai-security
   ---
   apiVersion: v1
   kind: ServiceAccount
   metadata:
     name: onesecure-ai-security
     namespace: onesecure-ai-security
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRole
   metadata:
     name: onesecure-ai-security-read
   rules:
     - apiGroups: [""]
       resources: ["pods", "serviceaccounts", "namespaces"]
       verbs: ["get", "list"]
     - apiGroups: ["apps"]
       resources: ["replicasets", "statefulsets", "daemonsets"]
       verbs: ["get", "list"]
     - apiGroups: ["batch"]
       resources: ["jobs"]
       verbs: ["get", "list"]
     - apiGroups: ["rbac.authorization.k8s.io"]
       resources: ["roles", "rolebindings", "clusterroles", "clusterrolebindings"]
       verbs: ["get", "list"]
     - apiGroups: ["networking.k8s.io"]
       resources: ["networkpolicies"]
       verbs: ["get", "list"]
   ---
   apiVersion: rbac.authorization.k8s.io/v1
   kind: ClusterRoleBinding
   metadata:
     name: onesecure-ai-security-read
   roleRef:
     apiGroup: rbac.authorization.k8s.io
     kind: ClusterRole
     name: onesecure-ai-security-read
   subjects:
     - kind: ServiceAccount
       name: onesecure-ai-security
       namespace: onesecure-ai-security
   ```

2. Apply the file.

   ```sh
   kubectl apply -f onesecure-ai-security.yaml
   ```

3. Create a token for the service account. The token expires after the duration you ask for, and the API server may cap it lower.

   ```sh
   kubectl create token onesecure-ai-security -n onesecure-ai-security --duration=8760h
   ```

   A token that doesn't expire is a secret of type `kubernetes.io/service-account-token` in the same namespace. Use it only if your policy allows a token with no expiry.

4. If the API server uses the cluster's own authority, print the cluster's certificate authority (CA) certificate as PEM text.

   ```sh
   kubectl config view --raw --minify \
     -o jsonpath='{.clusters[0].cluster.certificate-authority-data}' | base64 --decode
   ```

5. Check the role before you connect. The first five commands answer "yes" and the last answers "no".

   ```sh
   kubectl auth can-i list pods -A \
     --as=system:serviceaccount:onesecure-ai-security:onesecure-ai-security
   kubectl auth can-i list replicasets.apps -A \
     --as=system:serviceaccount:onesecure-ai-security:onesecure-ai-security
   kubectl auth can-i list jobs.batch -A \
     --as=system:serviceaccount:onesecure-ai-security:onesecure-ai-security
   kubectl auth can-i list statefulsets.apps -A \
     --as=system:serviceaccount:onesecure-ai-security:onesecure-ai-security
   kubectl auth can-i list daemonsets.apps -A \
     --as=system:serviceaccount:onesecure-ai-security:onesecure-ai-security
   kubectl auth can-i get secrets -A \
     --as=system:serviceaccount:onesecure-ai-security:onesecure-ai-security
   ```

:::warning
The token expires after the duration you ask for, and the API server may cap it lower. Create a new token, and enter it under **Edit** on the source before the old one expires.
:::

## Connect the source

1. In AI Security, select **Sources**.
2. In **Search platforms**, enter "Kubernetes".
3. In the Kubernetes row, click **Connect**. The **Connect Kubernetes** dialog opens.
4. In **API server URL**, paste the cluster's `server` address.
5. In **Service account token**, paste the token.
6. Optional: in **CA certificate**, paste the decoded `certificate-authority-data` if the cluster uses its own authority.
7. Click **Connect**. The dialog shows "Saved. Testing the connection." and then the result of the test.
8. Click **Done**.

The address also names this source. It must be a public https address. AI Security refuses a private, loopback, link-local, or reserved address, a single-label name, a name in an internal zone such as `.local` or `.svc`, and a name that resolves to any such address.

Select the Kubernetes row to see the source.

| Line | What it shows |
|------|---------------|
| Credential | "Readable". |
| Last test | "Succeeded". |
| Last scanned | "Never", then "Succeeded". |

## What this connector reads

- The pods in every namespace, grouped into the workloads that run them, such as a Deployment, a StatefulSet, or a Job. AI Security follows a pod through its replica set to its Deployment, and through its job to its CronJob. It reads each workload with its namespace, labels, the images its containers run, the nodes its pods run on, and the names of its image pull secrets. It reads a pod whose owner it can't resolve as its own workload.
- The service account each workload runs as, and the cloud workload identity that account is annotated with: an AWS role, a Google service account, or an Azure managed identity.
- Roles and cluster roles, and the role bindings and cluster role bindings that grant them to service accounts. AI Security reads what the roles grant up to a limit. Past the limit, it doesn't read the rest, and it records a warning naming the role, the binding, or the service account where it stopped.
- The network policies in every namespace, and where each lets the workloads it selects connect out. AI Security doesn't read ingress rules.
- The secrets a pod uses, by name only, as the pod names them. AI Security never reads the secrets themselves.

{/* TODO: confirm whether to publish the per-rule, per-binding, per-service-account, and per-read limits on how much a role grants that AI Security reads. */}

### What it never touches

- It reads no secret. The cluster role grants no access to secrets, so the API server refuses any read of them. A secret appears only by the name a pod gives it.
- It enters no container and reads no log. It lists only the objects named in the previous section.
- It never changes anything. Every call is a get or a list.

## Permissions

| Kubernetes resource | What AI Security reads with it | Scan without it |
|---------------------|--------------------------------|-----------------|
| `pods` | Workloads and their images. | Nothing is read. |
| `replicasets` | The Deployment each pod belongs to. | A degradation for each namespace, and each pod of a Deployment reads as an agent of its own. |
| `jobs` | The CronJob each job belongs to, and when a job ran and how it finished. | A degradation for each namespace, and each pod of a Job or CronJob reads as an agent of its own. |
| `statefulsets`, `daemonsets` | The StatefulSet or DaemonSet each pod belongs to. | A degradation for each namespace, and each pod of a StatefulSet or DaemonSet reads as an agent of its own. |
| `namespaces` | The owner stated on a namespace, and the namespaces to read one by one if a list across the cluster is refused. | No owner is taken from a namespace, and a list refused across the cluster isn't read at all. |
| `serviceaccounts` | The cloud identity annotations on each service account. | The service account is still known by the name the pod gives it, but its cloud identity isn't. |
| `roles`, `clusterroles` | The rules each role grants. | Bindings carry no permissions. |
| `rolebindings`, `clusterrolebindings` | Which roles each service account holds. | No workload permissions are known. |
| `networkpolicies` | What each workload may reach over the network. | Network reach is unknown. |

## If the test fails

| What you see | What it means | What to do |
|--------------|---------------|------------|
| "No credential is stored for this source." or "The credential is missing settings this platform needs." | The address or the token isn't stored. | Click **Edit**, and enter both. |
| "The stored credential can't be used. Enter it again." | AI Security can't use the stored credential. | Click **Edit**, and enter them again. |
| "The platform refused the credential. It is wrong, expired or revoked." | The API server didn't accept the token. | Create a new token, since it may have expired, and click **Edit** to enter it. |
| "The credential works, but access was denied. A permission is missing." | The API server accepted the token but refused a list. | Check that the cluster role binding names this service account, with the checks in step 5 of "Create the service account token in Kubernetes". |
| "A setting is invalid. Addresses must start with https:// on the platform's domain." | The address isn't `https://`, its name is a local, private, or internal address or resolves to one, or the CA certificate can't be read as PEM text. | Click **Edit**, enter the address as `https://` with the host and port, and paste the decoded CA certificate from step 4. |
| "The platform didn't answer, or said it is down or busy." | AI Security couldn't reach the API server at that address. | Check the address and port, that AI Security can reach the API server, and that the CA certificate is the cluster's. |
| "A live connection test isn't available for this platform. All required settings are entered." | AI Security has no live test for this platform. | Run a scan to prove the credential. |
| "The test failed on our side. Try again." | The test couldn't finish. | Try again. If it keeps failing, contact Netwrix support. |

## Security notes

- AI Security stores the token encrypted when you click **Connect** and never shows it again. The source shows only whether a credential is set and which settings are missing.
- AI Security presents the token only to the API server address you entered, over TLS.
- The cluster role can read no secret and change nothing. Grant it nothing more.
- To revoke access, delete the cluster role binding or the service account: `kubectl delete clusterrolebinding onesecure-ai-security-read`. Deleting the service account also voids every token created for it. **Disconnect** on the source removes it from 1Secure.
