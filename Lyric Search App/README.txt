Lyrics Search App

This app provides users with a simple interface to search for song lyrics. By entering the artist or song name, users receive a list of matching songs. Selecting a song title will fetch and display its lyrics. This app uses the Lyrics.ovh API for retrieving song data and lyrics.
Table of Contents

    Demo
    Features
    Technologies Used
    Setup Instructions
    Code Overview
        HTML Structure
        JavaScript Code
            Event Listeners
            Functions
    How It Works
    Potential Improvements

Demo

    Type in the search field to search for an artist or song.
    Results show a list of songs with artist names and song titles.
    Click on any song title to view the lyrics.

Features

    Search by Song or Artist: Find songs by typing in keywords related to the song or artist name.
    View Lyrics: Click on any song from the search results to display its lyrics.
    Clean UI: Simple and user-friendly layout, built with basic HTML and JavaScript.

Technologies Used

    HTML/CSS: Basic structure and styling
    JavaScript: Core functionality
    Lyrics.ovh API: Provides song suggestions and lyrics

Setup Instructions

    Clone the repository or download the source code.
    Open index.html in your browser.

No additional setup is required, as this project does not depend on any frameworks or libraries other than the external API.
Code Overview
HTML Structure

The HTML structure includes:

    Form: For entering the search query.
    Input Field: To accept user search input (song title or artist name).
    Result Section: Where the search results and lyrics will be displayed.

JavaScript Code
Event Listeners

The JavaScript code listens for user actions and fetches data from the Lyrics.ovh API. Event listeners include:

    submit event on the form to handle search submissions.
    click event on the result container to detect when a user clicks on a song title.

Functions

    beginSearch(searchValue):
        Fetches search results based on the user’s input by calling the API endpoint https://api.lyrics.ovh/suggest/{searchValue}.
        Parses the returned JSON data and sends it to the displayData function.

    displayData(data):
        Populates the result section with a list of songs retrieved from the API.
        Each song item displays the artist and song title, along with a clickable span element for fetching lyrics.

    getLyrics(artist, songTitle):
        Triggered when a song is clicked in the search results.
        Fetches lyrics for the selected song from the API https://api.lyrics.ovh/v1/{artist}/{songTitle}.
        Replaces the result section content with the fetched lyrics.

How It Works

    User Search:
        A user types a keyword in the search box and submits the form.
        If no keyword is entered, an alert is shown. If a keyword is provided, the beginSearch function is called.

    Fetching and Displaying Results:
        beginSearch retrieves song suggestions based on the search query.
        The returned list is formatted and displayed using the displayData function, which allows users to click on individual songs.

    Fetching and Displaying Lyrics:
        When a user clicks on a song, getLyrics is called with the selected artist and song title.
        The lyrics are retrieved, formatted, and displayed in the result section.

Potential Improvements

    Error Handling:
        Add error handling for failed API calls or unresponsive API endpoints.

    Pagination for Results:
        Implement pagination if the search result contains many items to avoid cluttered displays.

    Loading Spinner:
        Add a loading spinner to improve UX during data fetching.

    Mobile Responsiveness:
        Refine the design to ensure optimal usability on smaller screens.

This README offers an overview of the code, its purpose, and how to get it up and running, along with suggestions for further enhancements. Enjoy using the Lyrics Search App!
