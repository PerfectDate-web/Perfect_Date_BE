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
        "_id": "648ad613dafdb9754f40b89a",
        "permission_name": "Create Role",
        "permission_apiPath": "/api/v1/role",
        "permission_method": "POST",
        "permission_module": "ROLES",
    },
    {
        "_id": "648ad640dafdb9754f40b8ab",
        "permission_name": "Enable Permissions",
        "permission_apiPath": "/api/v1/role/:roleId/enable-permissions",
        "permission_method": "PATCH",
        "permission_module": "ROLES",
    },
    {
        "_id": "648ad640dafdb9754f40b7ac",
        "permission_name": "Disable Permissions",
        "permission_apiPath": "/api/v1/role/:roleId/disable-permissions",
        "permission_method": "PATCH",
        "permission_module": "ROLES",
    },
    {
        "_id": "648ad5ebdafdb9754f40b895",
        "permission_name": "Like a Plan",
        "permission_apiPath": "/api/v1/likes",
        "permission_method": "POST",
        "permission_module": "LIKES",
    },
    {
        "_id": "648ad5d4dafdb9754f40b890",
        "permission_name": "Unlike a Plan",
        "permission_apiPath": "/api/v1/likes/unlike",
        "permission_method": "POST",
        "permission_module": "LIKES",
    },
    {
        "_id": "648ad5c5dafdb9754f40b88b",
        "permission_name": "Check if Plan is Liked",
        "permission_apiPath": "/api/v1/likes/check",
        "permission_method": "POST",
        "permission_module": "LIKES",
    },
    {
        "_id": "648ad5aedafdb9754f40b886",
        "permission_name": "Get Number of Likes for a Plan",
        "permission_apiPath": "/api/v1/likes/:planId",
        "permission_method": "GET",
        "permission_module": "LIKES",
    },
    {
        "_id": "648ad622dafdb9754f40b89f",
        "permission_name": "Create Activity",
        "permission_apiPath": "/api/v1/activities",
        "permission_method": "POST",
        "permission_module": "ACTIVITIES",
    },
    {
        "_id": "648ad630dafdb9754f40b8a6",
        "permission_name": "Get Activities by Plan",
        "permission_apiPath": "/api/v1/activities/:planId",
        "permission_method": "GET",
        "permission_module": "ACTIVITIES",
    },
    {
        "_id": "648ad700dafdb9754f40b8b5",
        "permission_name": "Create Permission",
        "permission_apiPath": "/api/v1/permissions",
        "permission_method": "POST",
        "permission_module": "PERMISSIONS",
    },
    {
        "_id": "648ad710dafdb9754f40b8b8",
        "permission_name": "Get All Permissions",
        "permission_apiPath": "/api/v1/permissions",
        "permission_method": "GET",
        "permission_module": "PERMISSIONS",
    },
    {
        "_id": "648ad720dafdb9754f40b8bb",
        "permission_name": "Create Plan",
        "permission_apiPath": "/api/v1/plans",
        "permission_method": "PATCH",
        "permission_module": "PLANS",
    },
    {
        "_id": "648ad730dafdb9754f40b8be",
        "permission_name": "Join Plan",
        "permission_apiPath": "/api/v1/plans/join",
        "permission_method": "POST",
        "permission_module": "PLANS",
    }
];

export const USER_PERMISSION_IDS = [
    "648ad720dafdb9754f40b8bb",
    "648ad730dafdb9754f40b8be",
    "648ad622dafdb9754f40b89f",
    "648ad630dafdb9754f40b8a6",
    "648ad5ebdafdb9754f40b895",
    "648ad5d4dafdb9754f40b890",
    "648ad5c5dafdb9754f40b88b",
    "648ad5aedafdb9754f40b886",
];
