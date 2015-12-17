ngl1 =
{
  users : {
    user_id:{
      name //
      surname
      registered //date
      last_visit
    },
    ...
  },
  posts : {
    post_id:{
      user_id
      category_id
      title
      content
    },
    ...
  },
  categories : {
    category_id:{
      name
      users:{
        user_id:true
        ...
      }
      posts : {
        post_id:true
      }
    }
  }

}
