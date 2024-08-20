export const schema=`
      type Query {
        hello: String
        id: String
        name: String
        getStudents: [Students]

      }
      type Students {
       name:String
       course:String
      }
    `