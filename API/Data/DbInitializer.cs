using API.Entities;

namespace API.Data
{
    public class DbInitializer
    {
        public static void Initialize(TechContext context)
        {
            if (context.Users.Any()) return;

            var users = new List<User>
            {
                new User { Forename = "Peter", Surname = "Loew", Email = "ploew@example.com", IsActive = true, DateOfBirth = "1976-07-17" },
                new User { Forename = "Benjamin Franklin", Surname = "Gates", Email = "bfgates@example.com", IsActive = true, DateOfBirth = "1978-07-17" },
                new User { Forename = "Castor", Surname = "Troy", Email = "ctroy@example.com", IsActive = false, DateOfBirth = "1970-07-17" },
                new User { Forename = "Memphis", Surname = "Raines", Email = "mraines@example.com", IsActive = true, DateOfBirth = "1988-07-17" },
                new User { Forename = "Stanley", Surname = "Goodspeed", Email = "sgodspeed@example.com", IsActive = true, DateOfBirth = "1998-07-17" },
                new User { Forename = "H.I.", Surname = "McDunnough", Email = "himcdunnough@example.com", IsActive = true, DateOfBirth = "1981-07-17" }
            };
        
            foreach(var user in users)
            {
                context.Users.Add(user);
            }

            context.SaveChanges();
        
        }
    }
}