const getFriendsName = require('../friendsFinder');

describe('getFriendsName function', function() {
    it('should return friends names when a proper username is given as input', () => {
        const spy = jest.spyOn(console,'log');
        const result = getFriendsName('Tisha Ryan');
        expect(spy).toHaveBeenCalledWith([ 'Rhonda Tran', 'Wiley Underwood', 'Jeri Mendoza' ]);
    });
    it('should throw user not exists when username not in json file is given as input', () => {
        try{
        const result = getFriendsName('aishwarya');
        }
        catch(err){
        expect(err.message).toBe('User not exists.');
        }
    })
    it('should throw invalid input when array is given as input', () => {
      try{
      const result = getFriendsName([1,2]);
      }
      catch(err){
      expect(err.message).toBe('Not a valid input type for username.');
      }
    })
    it('should throw invalid input when boolean is given as input', () => {
        try{
        const result = getFriendsName(true);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for username.');
        }
      })
    it('should throw invalid input when integer is given as input', () => {
        try{
        const result = getFriendsName(5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for username.');
        }
      })
    it('should throw invalid input when floating point number is given as input', () => {
        try{
        const result = getFriendsName(5.5);
        }
        catch(err){
        expect(err.message).toBe('Not a valid input type for username.');
        }
      })
});