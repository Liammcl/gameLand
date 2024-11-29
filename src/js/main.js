import '../css/base.css';
import '../css/layout.css';
import '../css/components.css';
import '../css/typography.css';

import { initializeAnimations } from './animation';
import { initializeTracking } from './tracking';

document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeTracking();
});