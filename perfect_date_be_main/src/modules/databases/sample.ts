export const ADMIN_ROLE = "ADMIN";
export const USER_ROLE = "USER";

export const INIT_PERMISSIONS = [
    {
        "_id": "648ab6d3fa16b294212e4033",
        "permission_name": "Create User",
        "permission_apiPath": "/api/v1/users",
        "permission_method": "POST",
        "permission_module": "USERS",

    },
    {
        "_id": "648ab6e7fa16b294212e4038",
        "permission_name": "Get User by Id",
        "permission_apiPath": "/api/v1/users/:id",
        "permission_method": "GET",
        "permission_module": "USERS",

    },
    {
        "_id": "648ab6fdfa16b294212e403d",
        "permission_name": "Get User with paginate",
        "permission_apiPath": "/api/v1/users",
        "permission_method": "GET",
        "permission_module": "USERS",
    },
    {
        "_id": "648ab719fa16b294212e4042",
        "permission_name": "Update User",
        "permission_apiPath": "/api/v1/users/:id",
        "permission_method": "PATCH",
        "permission_module": "USERS",
    },
    {
        "_id": "648ab728fa16b294212e4047",
        "permission_name": "Delete User",
        "permission_apiPath": "/api/v1/users/:id",
        "permission_method": "DELETE",
        "permission_module": "USERS",
    },

    {
        "_id": "648ad59adafdb9754f40b881",
        "permission_name": "Create a permission",
        "permission_apiPath": "/api/v1/permissions",
        "permission_method": "POST",
        "permission_module": "PERMISSIONS",

    },
    {
        "_id": "648ad5aedafdb9754f40b886",
        "permission_name": "Fetch Permission with paginate",
        "permission_apiPath": "/api/v1/permissions",
        "permission_method": "GET",
        "permission_module": "PERMISSIONS",

    },
    {
        "_id": "648ad5c5dafdb9754f40b88b",
        "permission_name": "Fetch permission by id",
        "permission_apiPath": "/api/v1/permissions/:id",
        "permission_method": "GET",
        "permission_module": "PERMISSIONS",

    },
    {
        "_id": "648ad5d4dafdb9754f40b890",
        "permission_name": "Update a permission",
        "permission_apiPath": "/api/v1/permissions/:id",
        "permission_method": "PATCH",
        "permission_module": "PERMISSIONS",
    },
    {
        "_id": "648ad5ebdafdb9754f40b895",
        "permission_name": "Delete a permission",
        "permission_apiPath": "/api/v1/permissions/:id",
        "permission_method": "DELETE",
        "permission_module": "PERMISSIONS",
    },
    {
        "_id": "648ad613dafdb9754f40b89a",
        "permission_name": "Create Role",
        "permission_apiPath": "/api/v1/roles",
        "permission_method": "POST",
        "permission_module": "ROLES",

    },
    {
        "_id": "648ad622dafdb9754f40b89f",
        "permission_name": "Fetch roles with paginate",
        "permission_apiPath": "/api/v1/roles",
        "permission_method": "GET",
        "permission_module": "ROLES",
    },
    {
        "_id": "648ad630dafdb9754f40b8a6",
        "permission_name": "Fetch role by id",
        "permission_apiPath": "/api/v1/roles/:id",
        "permission_method": "GET",
        "permission_module": "ROLES",
    },
    {
        "_id": "648ad640dafdb9754f40b8ab",
        "permission_name": "Update Role",
        "permission_apiPath": "/api/v1/roles/:id",
        "permission_method": "PATCH",
        "permission_module": "ROLES",
    },
    {
        "_id": "648ad650dafdb9754f40b8b0",
        "permission_name": "Delete a Role",
        "permission_apiPath": "/api/v1/roles/:id",
        "permission_method": "DELETE",
        "permission_module": "ROLES",
    }
]