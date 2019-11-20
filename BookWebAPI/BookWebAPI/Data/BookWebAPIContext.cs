using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BookWebAPI.Models
{
    public class BookWebAPIContext : DbContext
    {
        public BookWebAPIContext (DbContextOptions<BookWebAPIContext> options)
            : base(options)
        {
        }

        public DbSet<BookWebAPI.Models.Book> Book { get; set; }
    }
}
