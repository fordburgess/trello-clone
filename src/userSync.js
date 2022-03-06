function userSyncRule(user, context, callback) {
  const userId = user.user_id
  const name = user.first_name

  const query = `mutation($userId: String!, $name: String) {
    insert_users(objects: [{
      id: $userId, name: $name, last_seen: "now()"
    }], on_conflict: {constraint: users_pkey, update_columns: [last_seen, name]}
    ) {
      affected_rows
    }
  }`;

  const variables = { userId: userId, name: name }

    Request.post({
      url: 'https://trello-clone1.hasura.app/v1/graphql',
      headers: { 'content-type' : 'application/json', 'x-hasura-admin-secret' : process.env.ADMIN_SECRET },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    }, function(error, response, body){
        console.log(body);
        callback(null, user, context);
    });
  }
