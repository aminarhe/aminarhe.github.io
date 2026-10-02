import { existsSync } from 'node:fs';
import { site } from '../data/site';

/**
 * The resume link. Drop your PDF at public/resume.pdf and it is served at
 * aminarhe.me/resume.pdf; until that file exists, the Drive link is used.
 */
export const resumeUrl = existsSync('public/resume.pdf') ? '/resume.pdf' : site.resume;
