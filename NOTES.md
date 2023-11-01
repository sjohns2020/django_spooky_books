## COMMANDS

<!-- Create VENV -->

python -m venv .env

<!-- Activate VENV -->

source .env/bin/activate

<!-- Create Project and Apps -->

django-admin startproject project_name
python manage.py startapp app_name

<!-- Changing your Models and Applying Database Migrations -->

python manage.py makemigrations
python manage.py showmigrations
python manage.py migrate

<!-- EXPORT data from Db in to json file-->

python manage.py dumpdata app_name.ModelName --output=data.json

<!-- Load Seeds -->

python manage.py loaddata data.json

<!-- Empty DB -->

python manage.py flush

<!-- Run Tests -->

python manage.py test

<!-- Create Superuser -->

python manage.py createsuperuser

<!-- Collect static in Static Root Dir -->

python manage.py collectstatic

<!-- Run Server -->

python3 manage.py runserver

## Why do I need a VENV

Using a virtual environment for your Django project is considered a best practice for several reasons:

Isolation: A virtual environment creates an isolated environment for your project. It allows you to install and manage project-specific dependencies without affecting the global Python environment or other projects. This ensures that different projects with different dependencies can coexist peacefully on the same system.

Dependency Management: With a virtual environment, you can specify and manage the exact versions of Python packages (dependencies) required for your Django project. This helps ensure that your project always uses the correct versions of libraries, preventing version conflicts and compatibility issues.

Portability: Virtual environments are portable, meaning you can easily share your project with others. You can export the list of project dependencies to a file (commonly requirements.txt) and share it. Others can then create their own virtual environment and install the exact same dependencies using that file.

Sandboxing: Virtual environments provide a sandboxed environment, which means that if something goes wrong with your project or its dependencies, it won't affect other projects or the system-wide Python installation. This makes it easier to troubleshoot and debug issues.

Version Compatibility: It allows you to work with different versions of Python for different projects. You can create virtual environments with specific Python versions, ensuring that your project works with the intended Python interpreter.

Cleaner Development: Virtual environments keep your project directory clean by isolating Python packages and project-specific files from one another. This makes it easier to manage and organize your project's files.

To create a virtual environment for your Django project, you can use tools like venv, virtualenv, or conda, depending on your preference and requirements. Once set up, you can activate the virtual environment to work within it, install project-specific dependencies, and run your Django project in an isolated environment. This practice helps ensure a more organized and maintainable development workflow.

## What does manage.py do

It serves as the main entry point for interacting with your Django project and provides various management commands to help you perform common tasks related to your Django application.

Here are some of the tasks that you can perform using manage.py:

**Run the Development Server:** You can start the Django development server by running `python manage.py runserver`. This allows you to run your Django application locally for testing and development.

**Create Django Apps:** You can use `python manage.py startapp appname` to create new Django apps within your project.

**Create Database Tables:** manage.py provides commands like `makemigrations` and `migrate` to create and apply database migrations, which are used to manage your database schema based on your Django models.

**Create Superuser:** You can create a superuser account for the Django admin site using the `createsuperuser` command.

**Interact with the Django Shell:** You can launch an interactive Python shell with Django configured using `python manage.py shell`. This is useful for testing code and working with your models.

**Manage Static and Media Files:** Django provides commands like `collectstatic` and `runserver` that are useful for managing static and media files during development.

**Perform Tests:** You can run tests for your Django application using the `test` command.

**Create Custom Management Commands:** You can create custom management commands specific to your project by defining Python functions and registering them as management commands using the `@management decorator`.

**Manage Translations:** If you are internationalizing your Django project, you can use manage.py to manage translation files and compile messages.

And More: There are many other built-in management commands available through manage.py for tasks like checking the project for common issues (check), creating new templates (`startproject`), and more.

In summary, manage.py is a versatile tool that simplifies various administrative and development tasks when working with Django projects. It is an essential part of the Django framework and helps streamline the development and maintenance of Django applications.

## What do serializers do

## Django filters

## Process

### Getting data

- Used id as PK as isbn can be the same on different book versions.
- chat gpt to create first test seeds
- created a data_fetch_script
- Added image for front end usability

### Setting up database

- Hide credentials `pip3 install python-decouple python-environ`

## Questions

1. The brief requires the system to allow the user to view all books and delete one. I have implemented a RESTfull router to my Django Rest Framework allowing all CRUD actions on my books database. Would you prefer I stuck with the brief and only have View All books and Delete one book?
