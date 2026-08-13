# PBF impact statements — reviewer site

Static review page for a UN PBSO Peacebuilding Fund drafting exercise.

Everything under `payload.enc.json` is AES-256-GCM ciphertext. The key is derived in the
browser from an access key held only by the reviewers (PBKDF2-SHA256, 600,000 iterations);
it is not in this repository and cannot be recovered from it.
