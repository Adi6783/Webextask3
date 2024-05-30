# Webextask3
This is the submission for task 3.
It contains two folders , backendtrial and frontendtrial.
While running it make sure you run backend and frontend simultaneously.
Use "npm run dev" on both the terminals to run the project.
The project's frontend will here on the port 8080.
I have used postgres and prisma here.The database url is taken from neon.tech .I could not hash the passwords due to an error which I tried but could not resolve.
I will share the error through an image.
I have used hono here. I have also used zod wherever required for validation.
1.Signing up with an id, successful.
![sign1](https://github.com/Adi6783/Webextask3/assets/165944437/376714bb-f9c4-4a48-8b6d-3ca829c04867)
2.The token is shown in response.
![sign2](https://github.com/Adi6783/Webextask3/assets/165944437/dce6c23f-9f88-493f-ba9c-aa8c2b6c83dc)
3.Now signing in with the same id.It is successful.
![sign3](https://github.com/Adi6783/Webextask3/assets/165944437/a775dc02-05dd-430e-a71a-e9263a3f8ed7)
4.The same token being shown.
![sign4](https://github.com/Adi6783/Webextask3/assets/165944437/90b04d15-294f-4e9d-a3e3-e0971a8f4437)
5.I encountered the following not just only for bcrypt but  all other libraries that i tried using, hence i could not hash.
![sign5](https://github.com/Adi6783/Webextask3/assets/165944437/78e5c95b-249a-454f-b9d1-e87129637f0c)

