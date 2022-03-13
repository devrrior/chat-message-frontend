#!/bin/sh

npm rebuild esbuild

exec "$@"


npm run dev
