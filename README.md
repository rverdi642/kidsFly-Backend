<div class="container">

<div class="row">

<header class="twelve column">

# <style="margin-top: 30px"="">Kids Fly</style="margin-top:>

This is the documentation for the Kids Fly project.

**Contents**

<div class="lists">

*   [Login](#login)
*   [Get User Data](#getuserdata)
*   [Get User by ID](#getuserbyid)
*   [Post New User](#postnewuser)
*   [Edit User by ID](#edituserbyID)
*   [Delete User by ID](#deleteuserbyID)
*   [Get List of All Trips](#getlistoftrips)
*   [Get Trip by ID](#gettripbyID)
*   [Post New Trip](#postnewtrip)
*   [Edit Trip by ID](#edittripbyID)
*   [Delete Trip by ID](#deletetripbyID)

</div>

* * *

</header>

</div>

## Usage

<section id="login" class="row">

#### Login

<span>Endpoint URL:</span> `/login` <span>Method:</span> `POST`

**Expected Input**

    {
                        "email": "bar",
                        "password":"bar"  
                    }

**Example Output**

    {
                    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6IkFkbWluIiwibGFzdF9uYW1lIjoiQWRtaW4iLCJlbWFpbCI6IkFkbWluIiwicGhvbmUiOiI1NTUtNTU1LTU1NTUiLCJwYXNzd29yZCI6IkFkbWluIiwiaXNfYWRtaW4iOjEsImFpcnBvcnQiOiJEZW",
                    "is_admin": 1
                    }

</section>

* * *

<section id="getuserdata" class="row">

#### Get User Data

<span>Endpoint URL:</span> `/users` <span>Method:</span> `GET`

**Expected Input**

    JWTtoken

**Example Output**

    {
                        "id": 1,
                        "first_name": "Admin",
                        "last_name": "Admin",
                        "email": "Admin",
                        "phone": "555-555-5555",
                        "is_admin": 1,
                        "airport": "Denver"
                    }

</section>

* * *

<section id="getuserbyid" class="row">

#### Get User By ID

<span>Endpoint URL:</span> `/users/id` <span>Method:</span> `GET`

**Example Output**

                        {
                            "id": 1,
                            "first_name": "Admin",
                            "last_name": "Admin",
                            "email": "Admin",
                            "phone": "555-555-5555",
                            "is_admin": 1,
                            "airport": "Denver"
                        }

</section>

* * *

<section id="postnewuser" class="row">

#### Post New User

<span>Endpoint URL:</span> `/users` <span>Method:</span> `POST`

**Expected Admin Input**

    {
                            "first_name": "Admin",
                            "last_name": "Admin",
                            "email": "Admin",
                            "phone": "555-555-5555",
                            "password": "Admin",
                            "is_admin": 1,
                            "airport": "Denver"  
                    }

**Expected Non-Admin Input**

    {
                            "first_name": "bar",
                            "last_name": "bar",
                            "email": "bar",
                            "phone": "555-555-5555",
                            "password": "bar",
                            "is_admin": 0,  
                    }

**Example Output**

                        {
                            "id": 13
                        }      

</section>

* * *

<section id="edituserbyID" class="row">

#### Edit User

<span>Endpoint URL:</span> `/users/id` <span>Method:</span> `PUT`

**Expected Admin Input**

    {
                            "first_name": "Admin",
                            "last_name": "Admin",
                            "email": "Admin",
                            "phone": "555-555-5555",
                            "password": "Admin",
                            "is_admin": 1,
                            "airport": "Denver"  
                    }

**Expected Non-Admin Input**

    {
                            "first_name": "bar",
                            "last_name": "bar",
                            "email": "bar",
                            "phone": "555-555-5555",
                            "password": "bar",
                            "is_admin": 0,  
                    }

**Example Output**

                        {
                            "token": "updated token"
                        }     

</section>

* * *

<section id="deleteuserbyID" class="row">

#### Delete User

<span>Endpoint URL:</span> `/users/id` <span>Method:</span> `DELETE`

**Example Output**

                            1    

</section>

* * *

<section id="getlistoftrips" class="row">

#### Get Trips

<span>Endpoint URL:</span> `/trips` <span>Method:</span> `GET`

**Example Admin Output**

                            [
                            {
                                "id": 2,
                                "user_id": 2,
                                "airport": "Denver",
                                "airline": "American",
                                "departure_time": 1562870172471,
                                "kids": 3,
                                "is_arriving": 0
                            },
                            {
                                "id": 4,
                                "user_id": 4,
                                "airport": "Denver",
                                "airline": "American",
                                "departure_time": 1576198383834,
                                "kids": 8,
                                "is_arriving": 0
                            }
                        ]      

**Example user Output**

                            [
                            {
                                "id": 2,
                                "user_id": 5,
                                "airport": "Denver",
                                "airline": "American",
                                "departure_time": 1562870172471,
                                "kids": 3,
                                "is_arriving": 0
                            },
                            {
                                "id": 5,
                                "user_id": 5,
                                "airport": "D.C.",
                                "airline": "American",
                                "departure_time": 1576198383834,
                                "kids": 8,
                                "is_arriving": 0
                            }
                        ]      

</section>

* * *

<section id="gettripbyID" class="row">

#### Get Trip By Id

<span>Endpoint URL:</span> `/trips/id` <span>Method:</span> `GET`

**Example Output**

    {
                                "id": 2,
                                "user_id": 5,
                                "airport": "Denver",
                                "airline": "American",
                                "departure_time": 1562870172471,
                                "kids": 3,
                                "is_arriving": 0
                                }      

</section>

* * *

<section id="postnewtrip" class="row">

#### Post New Trip

<span>Endpoint URL:</span> `/trips` <span>Method:</span> `POST`

**Example Input**

                            {
                                "airport": "D.C.",
                                "airline": "American",
                                "departure_time": 1560728894419,
                                "kids": 2,
                                "is_arriving": 0
                        }

**Example Output**

                            [
                            tripId
                        ]     

</section>

* * *

<section id="edittripbyID" class="row">

#### Edit Trip

<span>Endpoint URL:</span> `/trips/id` <span>Method:</span> `PUT`

**Example Input**

                            {
                                "airport": "D.C.",
                                "airline": "American",
                                "departure_time": 1560728894419,
                                "kids": 2,
                                "is_arriving": 1
                        }

**Example Output**

                        1     

</section>

* * *

<section id="deletetripbyID" class="row">

#### Delete Trip

<span>Endpoint URL:</span> `/trips/id` <span>Method:</span> `DELETE`

**Example Output**

                            1      

</section>

* * *

</div>

<footer style="background-color: #eee; padding-top: 30px; margin-top: 50px;">

<div class="container">

<div class="row">

<div class="one-half column">

*   [<span>GitHub Repository</span>](https://github.com/kidsfly/kidsfly-backend)

</div>

<div class="one-half column">

This page was built using [S K E L E T O N.](http://getskeleton.com/)

</div>

</div>
* * *

<small>© 2019</small>

</div>

</footer>