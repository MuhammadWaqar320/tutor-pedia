"use strict";
const UserRoleEnum = new GraphQLEnumType({
    name: "UserRole",
    values: {
        Admin: { value: userRole.admin },
        Student: { value: userRole.student },
        Teacher: { value: userRole.teacher },
    },
});
