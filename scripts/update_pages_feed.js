"use strict";

/*
 * LEGACY SECURITY QUARANTINE
 *
 * This script previously used a GitHub token to write automated QA heartbeat
 * data into the repository. The related workflow and Pages feed are retired.
 *
 * The original implementation remains available in Git history for authorised
 * forensic review. Do not restore repository writes or token use here.
 */

throw new Error(
  "Legacy QA feed updater is disabled. No GitHub token use or repository write is authorised."
);
