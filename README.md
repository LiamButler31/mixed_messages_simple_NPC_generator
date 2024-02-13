# Codecademy Mixed Messages Project

## Simple NPC Generator

A tool for generating random NPCs for role playing games such as Dungeons and Dragons or similar.
It has been kept deliberately simple in keeping with the spirit of the original project brief, as the scope could have easily ballooned out of control.

### Features

- The generator will produce a random species, gender, physical descriptor, and starting attitude towards the party.
- An umbrella non-binary gender is included with a 4% chance of being selected. This is an arbitrary, over-representative number with the intention of being inclusive. Individual DMs may wish to change it to suit their needs.
- Capacity for user input to specifify any parameters that have already been pre-selected.

### How To Run

- Run the script in node.js to log the output to the terminal.
- A command line UI is not yet implemented, so any user-defined parameters that they wish to include must be achieved by directly editing the function generateNPC() in source code.
  - getSpecies() and getGender() both accept a string as an argument.
  - getDescription() and getAttitude() both accept a boolean, default is true. Pass false to skip these in the output.
