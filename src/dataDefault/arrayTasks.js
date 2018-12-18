export const arrayTasks = [
    {
        nameCategory: 'Category1',
        tasks: [{
            name: 'To-Do item 1',
            description: 'test 1'
        },{
            name: 'To-Do item 2',
            description: 'test 2'
        },{
            name: 'To-Do item 3',
            description: 'test 3'
        }],
        subcategory: [
            {
                nameCategory: 'Category 1-1',
                tasks: []
            }
        ]
    },{
        nameCategory: 'Category2',
        tasks: [{
            name: 'To-Do item 4',
            description: 'test 4'
        },{
            name: 'To-Do item 5',
            description: 'test 5'
        }, {
            name: 'To-Do item 6',
            description: 'test 6'
        }],
        subcategory: [
            {
                nameCategory: 'Category 2-1',
                tasks: []
            }
        ]
    },{
        nameCategory: 'Category3',
        tasks: [{
            name: 'To-Do item 7',
            description: 'test 7'
        },{
            name: 'To-Do item 8',
            description: 'test 8'
        },{
            name: 'To-Do item 9',
            description: 'test 9'
        }],
        subcategory: [
            {
                nameCategory: 'Category 3-1',
                tasks: [],
                subcategory: [
                    {
                        nameCategory: 'Category 3-1-1',
                        tasks: []
                    }
                ]
            },
            {
                nameCategory: 'Category 3-2',
                tasks: [],
                subcategory: [
                    {
                        nameCategory: 'Category 3-2-1',
                        tasks: []
                    }
                ]
            }

        ]
    }
];