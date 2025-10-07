
## Credits

- **Professor Eric Pogue** – for guidance and support on building the Dice Roller project.  
- **ChatGPT** – assisted with debugging, GitHub commands, and code review.  
- **GitHub** – for repository hosting and version control.



# Dice Roller Web Service

A simple Node.js Dice Roller RESTful API with a test page. Random numbers are generated on the server.  

---

## Execution

To run the Dice Roller, simply open the `index.html` file in your browser:  
- Click the **Roll Dice** button to generate a random dice value.  
- The server-side logic is in `serverside.js`.  
- The API endpoint `/roll` returns JSON like:

```json
{ "result": 4 }
