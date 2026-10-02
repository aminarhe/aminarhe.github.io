// Your words only. Do not invent. Newest first.

export type ResearchEntry = {
  title: string;
  /** Collaborators, advisor, dates — shown in grey under the title. */
  with?: string;
  body: string;
};

/** Shown after the prompt as `cat research/*.md`. */
export const research: ResearchEntry[] = [
  {
    title: 'Capstone: Dynamic Contact Modeling for Soft Robotic Grippers',
    with: 'with Prof. Carlos Galeano-Ríos (advisor), Aug 2026 to May 2027',
    body: 'Building a Python solver for the dynamic contact of an inflated membrane with a rigid object, using the Kinematic Match free-boundary method: replicating published results, then extending the method to pressurized spherical membranes.',
  },
  {
    title: 'Data anticlustering',
    with: 'with Prof. Carlos Galeano-Ríos, Cynthia Bortolotto, PhD, and Dmytro Antonovych',
    body: 'Contributed the data visualization and early code implementation to a project developing the Self-Perceived Dissimilarity (SPD) metric, which quantifies how dissimilar a dataset is from each element’s perspective. The team proved its mathematical properties, including semi-metric behavior and global maximization conditions for well-separated clusters. Applications include balanced team formation, clinical trial design, and clustering validation.',
  },
];
