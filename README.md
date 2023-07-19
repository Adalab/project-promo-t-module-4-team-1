

![Adalab](https://beta.adalab.es/resources/images/adalab-logo-155x61-bg-white.png)



# MODULE 4 | Team project: Adalabers portfolio platform

## Summary
We have been asked to create a website to create a digital portfolio of projects for Adalabers developers to present their best projects.

On the website it will be possible to fill in the data form about the author and the project, uploading the image of the project and the user. Once the data form is completed, users will be able to share the project details through a URL, so that the community will have access to the projects created by all Adalabers.

The website, according to the client's request indicated by our Product Owner, consists of two pages, both interactive and with a responsive design based on a mobile first design.

At the same time, all data, both existing and newly created, are stored in a FreeDB database.

## How it works

- The front-end part is structure 
The objectives were to create a **landing page** that briefly presents the web, and from which there is a button to access the **forms page**, from which you can upload your projects, and on the other hand, a page where you can see all the projects and another where you can see each one in detail.

The three parts of the form page are as follows:
- Data Form, with all required fields, such as Project Name, Demo Link, Repo Link, User Name, etc.
- Preview section, to preview in advance the final look and feel.
- Hero, with a functionality to access all the uploaded projects. For now, as there are no projects uploaded, a warning message has been left, until the backend development team allows to save them all.
With the creation of a digital project file, which as mentioned before, can be shared with a link created with the information filled in.

In addition, if the user can finish completing the form later, the data is saved in the Local Storage, so that she can continue with the fields already filled in.

Both from the Landing page and from the Project creation page, you can access the page where you can view the collection of projects. 
From this page, you can view each project individually.

- The back-end part is located in the src folder with its main file "index.js", and static server files. 
For the detail page a template engine has been used, which helps to render the detail page of the projects directly, each time a new project is saved or created. 
In this case, EJS has been used for template creation.

## Team members: 👩🏻‍💻👩🏻‍💻👩🏼‍💻👩🏻‍💻👩🏻‍💻👩🏻‍💻

- **Aida Blaya** @Aidablaya
- **Andrea Ferreiro** @AndreaFerreiro
- **Silvia Parada** @silviaparadag
- **Rebeca Serrano** @rebanada
- **Celia Suarez** @CeliaMSB
- **Irene Talaveroo** @IreneTaPa


## Tools: ⚒️

- `HTML, CSS, SASS, JS, React Framework, JSX, EJS, NodeJS`
- `Zeplin`
- `Vs Code`
- `GitHub` `Git`
- `React Starter Kit`
- `MySQL Workbench`
- `FreeDB`
- `Render`

This project has been supervised by:

- **Dayana Romero** @dayanare
- **Iván Garrido** @igarrido-adalab
- **Yanelis Serrano** @ytaylordev

  
  
## 💫 _y con eso... ¡Ya estaría!_ 💫  


© Adalab 2023 | Trótula Promotion

