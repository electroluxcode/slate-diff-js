import { diff_match_patch } from "../diff-match-patch-wrapper.js";

export const dmp = new diff_match_patch();
dmp.Diff_Timeout = 0.2; // computing a diff won't block longer than about 0.2s