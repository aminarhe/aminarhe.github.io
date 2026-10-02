// Every line here is copied from reference/design-reference.html. Do not invent.

export type Role = {
  /** Rendered as "### title" */
  title: string;
  when?: string;
  summary: string;
  more?: string[];
  stack?: string;
};

export type Entry = {
  /** Rendered as "## company" */
  company: string;
  when?: string;
  summary?: string;
  more?: string[];
  stack?: string;
  roles?: Role[];
};

export const work: Entry[] = [
  {
    company: 'Lucid Computing',
    when: 'Infrastructure and Software Engineer Intern, May to August 2026',
    summary:
      'Built a heterogeneous 16-GPU cluster (8× H100, 8× A100) under one Slurm-on-Kubernetes scheduler. Deployment is reproducible through GitOps: a separate dev cluster came up from the same declarative config with no manual setup.',
    more: [
      'Shipped the researcher-facing platform: a ~1,900-line FastAPI control plane as the cluster’s single provisioning and audit path across Slurm, LDAP, NFS, and Kubernetes, and a React console for self-serve GPU provisioning, SSH access, and role-based access.',
      'Served Qwen3.5-397B-A17B tensor-parallel across 8× H100, maintained as code and guarded by a CI smoke test that tells real regressions from a busy cluster.',
      'Set up CI/CD with tag-triggered deploys and rolling updates on self-hosted runners inside the air-gapped cluster, with rollout verification, version pinning, and an LLM-based PR review gate before production.',
    ],
    stack: 'stack: kubernetes slurm fastapi postgresql vllm github-actions react',
  },
  {
    company: 'Trilobio',
    when: 'Three internships, 2024 to 2026',
    roles: [
      {
        title: 'Robotics Engineer Intern',
        when: 'Jan to Mar 2026',
        summary:
          'Model predictive control for robotic-arm motion planning: no overshoot, about 2× faster settling, and 96–99.7% lower steady-state error.',
        more: [
          'Stood up a MuJoCo simulation environment to validate control algorithms before deploying to hardware.',
          'Benchmarked latency, stability, and computational load to assess real-time MPC on embedded hardware.',
        ],
      },
      {
        title: 'Software Engineer Intern',
        when: 'Jun to Aug 2025',
        summary:
          'An auto-layout engine using constraint programming (Python, Google OR-Tools, custom solvers) that replaced hours of biologists’ daily manual protocol planning.',
        more: [
          'Multichannel and multidispense pipetting optimization in TypeScript, with transformation-matrix rotation planning for the arm. Parallel operations made lab protocols 6× faster.',
          'A contamination-modeling algorithm that prevents cross-contamination and cut consumable waste by 30%.',
        ],
      },
      {
        title: 'Robotics Engineer Intern',
        when: 'May to Aug 2024',
        summary:
          'Moved the robot’s communication stack from CAN (8 Mbps) to USB 2.0 High-Speed (480 Mbps), validating signal integrity with an oscilloscope and test fixtures.',
        more: [
          'Engineered and debugged custom USB hub PCBs and firmware for high-throughput sensor streaming.',
          'Designed camera and laser mounts in CAD and an OpenCV laser-triangulation pipeline that produces 3D point clouds and surface meshes.',
        ],
      },
    ],
  },
  {
    company: 'Earlier',
    summary:
      'AI research engineering at Jubo Health: a real-time healthcare analytics endpoint over medical records, demoed at the Healthcare+ EXPO. Software engineering at Brothers On The Rise: a web app that automates user-feedback processing.',
  },
];
