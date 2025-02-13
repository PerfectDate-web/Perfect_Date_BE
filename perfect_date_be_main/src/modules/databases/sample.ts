export const ADMIN_ROLE = "ADMIN";
export const USER_ROLE = "USER";

export const INIT_PERMISSIONS = [
    // User permissions
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
        "permission_apiPath": "/api/v1/users/find-by-id/:id",
        "permission_method": "GET",
        "permission_module": "USERS",
    },
    {
        "_id": "648ab6e7fa16b294212e4039",
        "permission_name": "Add Partner",
        "permission_apiPath": "/api/v1/users/add-partner",
        "permission_method": "PATCH",
        "permission_module": "USERS",
    },
    {
        "_id": "648ab6e7fa16b294212e4040",
        "permission_name": "Get Partner",
        "permission_apiPath": "/api/v1/users/partner",
        "permission_method": "GET",
        "permission_module": "USERS",
    },
    {
        "_id": "648ab6e7fa16b294212e4041",
        "permission_name": "Update My Info",
        "permission_apiPath": "/api/v1/users/update-my-info",
        "permission_method": "PATCH",
        "permission_module": "USERS",
    },
    {
        "_id": "648ab6e7fa16b294212e4042",
        "permission_name": "Get My Info",
        "permission_apiPath": "/api/v1/users/get-my-info",
        "permission_method": "GET",
        "permission_module": "USERS",
    },
    // Plans permissions
    {
        "_id": "648ad720dafdb9754f40b8bb",
        "permission_name": "Create Plan",
        "permission_apiPath": "/api/v1/plans",
        "permission_method": "POST",
        "permission_module": "PLANS",
    },
    {
        "_id": "648ad740dafdb9754f40b8bf",
        "permission_name": "Get Plan By Id",
        "permission_apiPath": "/api/v1/plans/:id",
        "permission_method": "GET",
        "permission_module": "PLANS",
    },
    {
        "_id": "648ad740dafdb9754f40b8c0",
        "permission_name": "Get My Plan List",
        "permission_apiPath": "/api/v1/plans",
        "permission_method": "GET",
        "permission_module": "PLANS",
    },

    // Likes permissions
    {
        "_id": "648ad5ebdafdb9754f40b895",
        "permission_name": "Like Plan",
        "permission_apiPath": "/api/v1/likes",
        "permission_method": "POST",
        "permission_module": "LIKES",
    },
    {
        "_id": "648ad5d4dafdb9754f40b890",
        "permission_name": "Unlike Plan",
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
        "permission_name": "Get Number of Likes for Plan",
        "permission_apiPath": "/api/v1/likes/:planId",
        "permission_method": "GET",
        "permission_module": "LIKES",
    },

    // Activities permissions
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
        "permission_apiPath": "/api/v1/activities/plan/:planId",
        "permission_method": "GET",
        "permission_module": "ACTIVITIES",
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
    "648ad740dafdb9754f40b8bf",
    "648ab6e7fa16b294212e4039",
    "648ab6e7fa16b294212e4040",
    "648ad740dafdb9754f40b8c0",
    "648ab6e7fa16b294212e4041",
    "648ab6e7fa16b294212e4042"
];
