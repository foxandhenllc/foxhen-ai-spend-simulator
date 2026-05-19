export const sample = {
  "repoName": "foxhen-ai-spend-simulator",
  "title": "AI Spend Simulator",
  "subtitle": "Model budget planning sample",
  "serviceLine": "AI cost planning",
  "heroTitle": "Estimate AI workflow spend before shipping the feature.",
  "heroCopy": "A fictional AI budget simulator that compares usage scenarios, model tiers, daily volume, cache impact, and alert thresholds.",
  "primaryAction": "Simulate budget",
  "secondaryAction": "Compare scenarios",
  "repositoryUrl": "https://github.com/foxandhenllc/foxhen-ai-spend-simulator",
  "liveDemoUrl": "https://foxhen-ai-spend-simulator.vercel.app",
  "theme": {
    "accent": "#29466d",
    "accent2": "#8bd0ff",
    "ink": "#06111f",
    "soft": "#eaf3ff",
    "warm": "#e9f8ff",
    "surface": "#fffaf4",
    "muted": "#5c667a",
    "border": "rgba(7, 18, 31, 0.12)"
  },
  "metrics": [
    {
      "label": "Monthly scenario",
      "value": "$186",
      "note": "sample estimate"
    },
    {
      "label": "Cache savings",
      "value": "31%",
      "note": "+$84 avoided"
    },
    {
      "label": "Alert threshold",
      "value": "80%",
      "note": "configured"
    }
  ],
  "stages": [
    {
      "label": "Inputs",
      "detail": "Define tasks, volume, usage ranges, model class, and response requirements.",
      "status": "ready",
      "owner": "Product",
      "index": 1
    },
    {
      "label": "Scenario",
      "detail": "Compare conservative, expected, and heavy usage profiles.",
      "status": "active",
      "owner": "Studio",
      "index": 2
    },
    {
      "label": "Controls",
      "detail": "Add cache, batch, retry, and alert assumptions.",
      "status": "waiting",
      "owner": "Engineer",
      "index": 3
    },
    {
      "label": "Handoff",
      "detail": "Package budget notes and launch guardrails.",
      "status": "queued",
      "owner": "Ops",
      "index": 4
    }
  ],
  "workItems": [
    {
      "title": "Daily volume",
      "detail": "Set expected request range",
      "status": "ready"
    },
    {
      "title": "Model mix",
      "detail": "Compare cheap and premium paths",
      "status": "active"
    },
    {
      "title": "Retry policy",
      "detail": "Waiting on error tolerance",
      "status": "waiting"
    },
    {
      "title": "Budget memo",
      "detail": "Queued for final export",
      "status": "queued"
    }
  ],
  "deliverables": [
    {
      "title": "Cost model",
      "detail": "Transparent assumptions for usage and unit cost."
    },
    {
      "title": "Scenario compare",
      "detail": "Best, expected, and spike cases in one view."
    },
    {
      "title": "Guardrail plan",
      "detail": "Alerts and design changes that protect margin."
    }
  ],
  "timeline": [
    {
      "time": "0-1 hr",
      "detail": "Map AI tasks and expected usage"
    },
    {
      "time": "1-4 hrs",
      "detail": "Build budget scenarios and controls"
    },
    {
      "time": "4-6 hrs",
      "detail": "Package launch guardrail memo"
    }
  ],
  "proof": [
    "Useful for AI automation buyers worried about operating cost.",
    "Shows practical product management and implementation judgment.",
    "No live provider account or billing data is used."
  ]
} as const;

export type StageStatus = "ready" | "active" | "waiting" | "queued";
export type DemoStage = (typeof sample.stages)[number];
export type WorkItem = (typeof sample.workItems)[number];
