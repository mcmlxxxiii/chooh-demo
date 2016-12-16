This is a tiny CouchDB design document web application project (couchapp) and
it is nothing more than a simple web page displaying a list of database names
present on a current CouchDB server. Though, implemented with React.js for
the purpose of javascript bundling example.

The sole goal of this example is to help get started with
[**chooh**](https://github.com/mcmlxxxiii/chooh) by showing it at work.


## Prerequisites

- CouchDB installed somewhere and credentials at hand of a user with permission
to create databases. Surely, admin is good.
- Python 2 with _virtualenv_ installed. If you don't have _virtualenv_
installed, run `pip install virtualenv`.

If you have a different Python version installed system-wide, you may want to
leverage [pyenv](https://github.com/yyuu/pyenv) to have some specific Python
version installed and switchable for your system user. Sorry, _chooh_ does not
yet work well with all of the Python version.


## Getting it running

1. Clone the _chooh-demo_ repository.
    ```
    git clone git@github.com:mcmlxxxiii/chooh-demo.git
    ```

2. Change into the newly-clonned repository directory.
    ```
    cd chooh-demo
    ```

3. Create a virtualenv for the project.
    ```
    virtualenv venv
    ```

4. Activate the just created virtualenv.
    ```
    . ./venv/bin/activate
    ```

5. Install project requirements.
    ```
    pip install -r requirement.txt
    ```

6. Make the _chooh.yaml_ config for the project from the example provided.
    ```
    cp chooh.example.yaml chooh.yaml
    ```

7. Modify the _chooh.yaml_ config to match your database setup.

8. Push the design document with the demo application to a configured CouchDB
database:
    ```
    chooh deploy development
    ```

9. Voila! This is it. Now, find the app in your CouchDB.

    If you pushed this demo to a CouchDB installation on your local machine and
    what you changed in _chooh.yaml_ is just user's credentials, then the url
    you can reach the app at should probably be as follows.

    http://127.0.0.1:5984/chooh-demo-dummy/_design/chooh_demo/index.html
