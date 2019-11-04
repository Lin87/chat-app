# Homework #5: Chat App 
Ethan Lin  
CSC436 Web Applications - Autumn 2019  
https://github.com/Lin87/chat-app

## Instruction
`http-server dist/chat-app`

## Dev Notes
* I followed the reading to create the Chat application; however, the code for the chat app presented in the text is not complete and up-to-date. I have to use the book's rxjs-chat source code as a starting point. i.e., I created a new Angular app, generated all of the components, services, and models to match the book's chat app. I copied over the book's code for each components, services, and models. I installed missing packages that the book did not mention. Lastly, the observable code from the book is outdated, so I have to update all of the code that is related to the `rxjs` package.
* In addition to creating a route guard for the main chat page, I also created a route guard for the login page to prevent a user from accessing it when the user is already logged in. The user will get redirected back to the main chat page if already logged in.
* For the extra credit, I added a red `Sign Out` button on the chat nav bar. The button will only show up if a user is logged in. I did not do the other part of the extra credit where it is asking to save messages to firebase database.

Also, for...
> when the user would like to chat they click on an icon fixed in the bottom right corner

and

> when the user is done chatting they can click the fixed icon to toggle or hide the display of the chat component.

I am not exactly sure what the instructions are asking for, and I did not receive an answer when I posted the question on Slack. So, I assumed the UI that the instructions are referring to is outdated.

However, I did tweak the UI on the chat page. Originally, a chat thread is selected, and the chat window is displayed on page load. I tweaked it so that the user would have to choose a thread first before the chat window is displayed. I also added a close (x) button on the chat window to close the chat window and unselected the thread.
