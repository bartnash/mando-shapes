### Project Clarification Questions

Hello! Before I begin building the Mandolin Chord Progression Visualizer, I have a few questions to ensure the final product aligns perfectly with your vision.

1.  **Chord Diagram Assets:** The PRD specifies that chord shapes will be represented by image files (SVG or PNG). Will you be providing these image assets? If not, I will generate simple, clean placeholders for each chord.
Answer: I have provided images in the src/data/patterns directory in this repo.  Their is a folder of images for each chord progression pattern.

2.  **Initial Data:** Could you provide the initial set of chord progression patterns you'd like to see in the application? For each pattern, please include:
    *   The pattern name (e.g., "G-Chop Style").
    *   A brief description (if any).
    *   The ordered list of chords with their labels (e.g., `[{ "label": "I", "image": "g-chord.svg" }, { "label": "IV", "image": "c-chord.svg" }]`).
Answer: There is a json file in each pattern directory which describes that chord progression pattern. 
3.  **Application Icon:** Do you have a specific design in mind for the application icon? If not, I will create a simple, generic icon as a placeholder.
Answer: The icon is in public/images/favicon.svg.

4.  **Centered Chord Styling:** When a chord is centered in the horizontal scroller, the PRD mentions it should be "more boldly" displayed and potentially resized on small screens. Do you have a preference for how this is handled? For example:
    *   Should it scale up in size (e.g., by 10%)?
    *   Should it have a different border or background color?
    *   On small screens, should it expand to fill the full width of the screen?
Answer: The centered image should scale up, maintining ratio, until it fills the screen either horizontally or vertically. Other images should be displayed slightly smaller than the centered image.

Answering these questions will help me build a prototype that is as close to your requirements as possible. Thank you!
