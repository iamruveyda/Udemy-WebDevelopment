using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using shopapp.webui.Extensions;

namespace shopapp.webui
{
    public class Program
    {

        /*Migration Manager: Migrating Automation
        Extensions-> MigrationManager
        
        */
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().MigrateDatabase().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
