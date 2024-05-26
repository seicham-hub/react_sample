import { gql } from '@apollo/client';
import client from "./appolo-client.js"


client.query({
    query: gql`
        query GetAllUser {
            getAllUser {
                result {
                    id
                    fullName
                    email
                    createdAt
                    updatedAt
                    deletedAt
                }
                userErrors {
                    code
                    message
                }
            }
        }
    `,
}).then((result) => console.log(result));