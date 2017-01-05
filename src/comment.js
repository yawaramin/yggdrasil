'use strict';

function Comment(timestamp, author, msg, replies) {
  const result = {};

  result.get_timestamp = () => timestamp;
  result.get_author = () => author;
  result.get_msg = () => msg;
  result.get_replies = () => replies;

  return Object.freeze(result);
}

Comment.init =
  Comment(
    new Date(2017, 0, 4, 21, 8, 57),
    'semi_colon',
    'As someone who doesn\'t use Go or Python: what is the use for this?',
    [ Comment(
        new Date(2017, 0, 4, 21, 23, 20),
        'vplatt',
        'To run Python code as a Go compiled executable. This allows them to avoid the Python Global Interpreter Lock (which severely limits Python\'s scalability within a single process) and run the Python code using Go modules as if they were Python modules.\
\
Really, unless you\'re Google or another Python shop interesting in moving to Go, you probably don\'t have a use for this.',
        [ Comment(
            new Date(2017, 0, 4, 22, 40, 49),
            'semi_colon',
            'Thanks, great explanation.',
            []),

          Comment(
            new Date(2017, 0, 4, 23, 22, 24),
            'VodkaHaze',
            'Getting around the GIL is a huge step. Python\'s chief weakness is lack of parallel scalability, IMO. Most solutions around this (joblib, dask, etc.) don\'t feel like complete solutions. Not when, for example, in C++ or Julia you can slap a macro above a loop to make it instantly parallel.',
            [ Comment(
                new Date(2017, 0, 4, 23, 32, 58),
                'CSI_Tech_Dept',
                'It doesn\'t need GIL, because it offers subset of functionality that python has. It is not even capable of compiling all python standard library.\
\
This code is for Google to move away from python. They can include python libraries in their go code and then one by one rewrite it in go.',
                []),

              Comment(
                new Date(2017, 0, 4, 23, 32, 18),
                'theseoafs',
                'For the record, this is not a complete solution either. Grumpy is a tool that compiles a single Python file (no real module support) while eschewing most of Python\'s dynamic features and supporting very little of its standard library.',
                []) ]),

          Comment(
            new Date(2017, 0, 4, 23, 31, 47),
            'MightyCreak',
            'Does this mean that you can\'t interpret two Python scripts at the same time because of GIL, but once interpreted, they can run in parallel?',
            []) ]) ]);

