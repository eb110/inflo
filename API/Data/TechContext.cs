using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class TechContext : DbContext
    {
        public TechContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }

        // protected override void OnModelCreating(ModelBuilder model)
        // => model.Entity<User>().HasData(new[]
        // {
        //     new User { Id = 1, Forename = "Peter", Surname = "Loew", Email = "ploew@example.com", IsActive = true, DateOfBirth = "1976-07-17" },
        //     new User { Id = 2, Forename = "Benjamin Franklin", Surname = "Gates", Email = "bfgates@example.com", IsActive = true, DateOfBirth = "1978-07-17" },
        //     new User { Id = 3, Forename = "Castor", Surname = "Troy", Email = "ctroy@example.com", IsActive = false, DateOfBirth = "1970-07-17" },
        //     new User { Id = 4, Forename = "Memphis", Surname = "Raines", Email = "mraines@example.com", IsActive = true, DateOfBirth = "1988-07-17" },
        //     new User { Id = 5, Forename = "Stanley", Surname = "Goodspeed", Email = "sgodspeed@example.com", IsActive = true, DateOfBirth = "1998-07-17" },
        //     new User { Id = 6, Forename = "H.I.", Surname = "McDunnough", Email = "himcdunnough@example.com", IsActive = true, DateOfBirth = "1981-07-17" },
        // });
    }
}