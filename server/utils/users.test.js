const expect = require('expect')
const { Users }  = require('./users')


describe('Users', () => {
    var users = new Users()

beforeEach(() => {
    users.users = [
        {
            name: 'Andy',
            id: '1',
            room: 'science'
        },
        {
            name: 'Yaa',
            id: '2',
            room: 'science'
        },
        {
            name: 'Yaw',
            id: '3',
            room: 'Arts'
        }
    ]
})

    it('should add new user', () => {
        var users = new Users()
        var user = {
            name: 'Andy',
            id: '3',
            room: 'science'
        }
        var resUser = users.addUser(user.id, user.name, user.room)
        expect(users.users).toEqual([user])
    })


    it('should return list of users in a room', () => {
        var userList = users;
        var userArray = userList.getUserList('science');
        expect(userArray).toEqual(['Andy', 'Yaa'])
    })

    it('should return a user', () => {
        var userId = '2';
        var user = users.getUser(userId)
        expect(user.id).toBe(userId)
    })

    it('should not find a user', () => {
        var userId = '99';
        var user = users.getUser(userId)
        expect(user).toNotExist()
    })

    it('should remove a user', () => {
        var userId = '1';
        var user = users.removeUser(userId)
        expect(user.id).toBe(userId)
        expect(users.users.length).toBe(2)
    })

    it('should not remove a user', () => {
        var userId = '99'
        var user = users.removeUser(userId)
        // expect(user.id).toBe(userId)
        expect(users.users.length).toBe(3)
    })



} )