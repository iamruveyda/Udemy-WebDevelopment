using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using shopapp.entity;

namespace shopapp.data.Configurations
{
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.HasKey(m => m.CategoryId);

            builder.Property(m => m.Name).IsRequired().HasMaxLength(100);

        }
    }
}