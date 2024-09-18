# What's going on?

Bun can't fetch from a local worker for some reason. (MacOS)

Repro steps:

```bash
cd worker-repro && pnpm install && pnpm run dev
```

```bash
cd bun && bun run index.ts
```

You should see the google.com fetch succeeding, but not wrangler's localhost:8787.

## Is this Bun's fault?

IDK, if I do this, it's able to access the server:

```bash
python3 -m http.server 8787 -b localhost
```
