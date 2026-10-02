import { existsSync } from 'node:fs';
import { site } from '../data/site';

/** Serves public/resume.pdf when present; otherwise falls back to the Drive link. */
export const resumeUrl = existsSync('public/resume.pdf') ? '/resume.pdf' : site.resume;
