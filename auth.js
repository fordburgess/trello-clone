function auth0(user, context, callback) {
  const namespace = 'https://trello-clone.com/my_fav_color'
  context.idToken[namespace] = {
    'x-hasura-default-role': 'user',
    'x-hasura-allowed-roles': ['user'],
    'x-hasura-user-id': user.user_id
  };
  callback(null, user, context);
}
