using System.Web.Http;

namespace KoMvcRepeatingFieldGroup.Controllers
{
    using System.Web.Mvc;

    using KoMvcRepeatingFieldGroup.Models;

    public class ApplicantController : Controller
    {
        public ActionResult Index()
        {
            var viewModel = new ApplicantViewModel();
            return this.View(viewModel);
        }
    }
}
