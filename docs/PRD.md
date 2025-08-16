### **Product Requirements Document: Mandolin Chord Progression Visualizer**

**1. Overview**

This document outlines the functional requirements for a web application, the "Mandolin Chord Progression Visualizer." The application will provide mandolin players with a simple, clean, and quick visual reference for common chord progression patterns. The primary goal is to help players easily see the set of chord shapes needed to play a particular progression, without unnecessary features or distractions.

**2. Target Audience**

The primary users are beginner to intermediate mandolin players who are learning common chord patterns, particularly those used in bluegrass, folk, and related genres. They need a straightforward way to visualize chord fingerings for a full progression at a glance.

**3. Functional Requirements**

**3.1. Main Application View**
*   **FR1: Application Title:** The application shall display a main title at the top of the page, identifying it as the "Mandolin Chord Shapes" visualizer along with an image which will serve as the icon
for the application.
*   **FR2: Display of Patterns:** The application shall display a collection of distinct chord progression patterns. These patterns should be listed vertically on the page.

**3.2. Pattern Display**
*   **FR3: Pattern Title:** Each chord progression pattern must have a clear, human-readable title (e.g., "G-Chop Style," "Little G Progression").
*   **FR4: Pattern Description:** Each pattern may optionally include a brief description to provide context for the player.
*   **FR5: Collection of Chords:** Each pattern must contain a set of associated chord shapes, displayed horizontally within the pattern's section.

**3.3. Chord Shape Display**
*   **FR6: Chord Diagram:** Each chord shape must be represented by a clear visual diagram (an image, such as an SVG or PNG) showing the mandolin fretboard and finger positions.
*   **FR7: Chord Label:** Each chord diagram must be accompanied by a label indicating its function within the progression (e.g., "I," "IV," "V," "ii," "vi").

**3.4. Content Management**
*   **FR8: Data-Driven Patterns:** The application's content (the patterns and their associated chords) must be loaded from a structured data source (e.g., JSON files). This allows for new patterns and chords to be added without changing the application's core display logic.
*   **FR9: Data Schema:** The data source for a pattern must define:
    *   A unique identifier for the pattern.
    *   The display name (title) of the pattern.
    *   An optional description.
    *   An ordered list of chords, where each chord specifies its label ("I", "V", etc.) and the file path to its corresponding diagram image.

**4. User Experience and Design Requirements**

*   **UX1: Layout:** The application should have a simple, single-page layout. The main title is at the top, followed by a list of patterns. Each pattern section should contain its title and a horizontal row of its chord shapes.
*   **UX2: Readability:** The design must be clean and high-contrast to ensure that the chord diagrams and labels are easy to read. A dark mode theme is preferred to reduce eye strain and improve focus on the content.
*   **UX3: Responsive Design:** The application must be fully responsive and usable on both desktop and mobile browsers. On smaller screens, the horizontal list of chords should wrap appropriately or become scrollable.
*   **UX4: Horizontal Scroll:**  Multiple chord shapes may be displayed on the screen at the same time, depending on screen size.  Provide the ability for users to scroll horizontally to view all shapes. While scrolling through shapes, snap each shape in turn to center horizontally on the screen.  The centered shaped should display more boldly on the screen.  For small screens the centered shape may be resized to take up the entire screen.  On touch screens the user should be able to swipe right and left to move from one shape to the next
*   **UX5: Non-Interactive View:** The primary view is for display only. There are no requirements for user interaction such as clicking, hovering, or form inputs in this initial version.

**5. Out of Scope (Future Considerations)**

The following features are explicitly out of scope for the initial version but may be considered for future releases:
*   Provide the ability to install the application on mobile devices for offline viewing.
*   Ability to choose which chords from within a pattern will be visible.
*   Support for optional shapes for some chords, stored as separate images displayed with the same label. 
