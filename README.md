# Frequent Flyer Portal

A simple website for airline floor staff to look up frequent flyer members, check their points, and add new members. The client was using paper and Excel sheets and losing data, so this replaces that.

## Links
- Live site: https://frequentflyerportal.vercel.app/
  
## What it does

- Shows a list of members with ID, name, tier and points
- Search box to find a member by name
- Form to add a new member (name, email, points)
- Tier is worked out from points: Silver (under 5000), Gold (5000 and up), Platinum (20000 and up)

## What happens when things go wrong

- **Empty list or search:** it shows "No data found" instead of a blank screen
- **Slow internet:** it shows "Loading members..." while the list loads (I fake a 1.5 second delay to test this)
- **Bad form input:** the form will not submit, the wrong boxes get a red border and a message under them

## Quality things

- **Accessibility:** every input has a label, the button has an aria-label, you can use the whole page with the keyboard, and the focused item has a visible outline
- **Security:** `<` and `>` are removed from everything typed in,
