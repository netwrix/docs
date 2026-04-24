
## How To: Authenticate Using an API Key in Postman

Postman is free to download and can be accessed here:  
[Download Postman | Get Started for Free](https://www.postman.com/downloads/)

Refer to the master NPS-D API documentation for a full list of available endpoints and usage.

---

### Prerequisites

You will need:
- A valid **userId**
- An **API Key** generated for that user

---

### Step 1: Configure Global Variables

1. Open Postman
2. Click the **eye icon** in the upper-right corner
   <img width="268" height="166" alt="image" src="https://github.com/user-attachments/assets/1313badd-86cb-41eb-9f1f-d28aad2b5b40" />

3. Click **Edit** next to **Globals**
<img width="705" height="363" alt="image" src="https://github.com/user-attachments/assets/f1a21342-ab16-4df5-8159-e703b8deb1a3" />
<br />

Add the following variables:

- **api_key**  
  - Initial Value: *your API key*  
  - Current Value: *your API key*

- *(Optional)* **base_url**  
  - Enter the SecureONE environment URL if required
<img width="1600" height="355" alt="image" src="https://github.com/user-attachments/assets/5e6ed8a1-985a-430d-8fd9-dd95c5a138a5" />

---

### Step 2: Open API Collection

1. Navigate to the **SecureONE API collection**
2. Expand **API Keys**
3. Select **Authenticate using an API key**
<img width="472" height="286" alt="image" src="https://github.com/user-attachments/assets/1fa66abe-28c8-4028-848d-e8452aafe43b" />

---

### Step 3: Configure Request Body

1. Click on the **Body** tab
2. Enter the **userId** associated with the API key

Note:  
`{{api_key}}` will automatically pull from the global variable.
<img width="505" height="207" alt="image" src="https://github.com/user-attachments/assets/01908c29-8ca1-48a9-847c-cf107cebaf65" />

---

### Step 4: Configure Tests

1. Click on the **Tests** tab
<img width="609" height="154" alt="image" src="https://github.com/user-attachments/assets/33b7cefc-bc32-4785-92d6-3256c4a719ad" />
<br />
2. Paste the following:

```javascript
var jsonData = JSON.parse(responseBody);
postman.setGlobalVariable("current_jwt", jsonData.token);
````

---

### Step 5: Save the Request

* Click **Save**, or
* Use **Save As** if you want to store it separately
<img width="406" height="145" alt="image" src="https://github.com/user-attachments/assets/956c2c89-8c33-4f22-ae35-97c7ced4c2b6" />

---

### Step 6: Send Request

1. Click **Send**
2. Verify the response appears at the bottom

You should receive a token in the response.
<img width="628" height="193" alt="image" src="https://github.com/user-attachments/assets/00b7b1c3-68f8-4148-9ae6-3325d23bd9db" />

---

### Step 7: Use the Token

* You can now send **GET** and **POST** requests using the token
* The token is stored as a global variable: `current_jwt`

---

### Important Notes

* The authentication token expires every **8 hours**
* You must re-run the **Authenticate using an API key** request to refresh it

