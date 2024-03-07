using Microsoft.AspNetCore.Mvc;
using System;
using System.Xml.Linq;
using static System.Net.Mime.MediaTypeNames;
// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace my_app_server.Controllers
{
  
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {
        public static List<Course> courseList = new List<Course>
        {
          new Course
          {
               Code=1,
               Name="Angular",
               CategoryCode="123",
               LessonCount="35",
               StartDate="01.01.24",
               Syllabus = new List<string>
               {
                "input",
                "output",
                "bootstrap",
                "Router"
               },
               LearningMode=0,
               InstructorCode="7894",
               Image=""
          },
          new Course
          {
               Code=2,
               Name="React",
               CategoryCode="789",
               LessonCount="28",
               StartDate="01.01.24",
               Syllabus = new List<string>
               {
                "observable",
                "material MUI",
                "hooks",
                "MOBX"
               },
               LearningMode=0,
               InstructorCode="7894",
               Image=""
          },
           new Course
          {
               Code=3,
               Name="innovation",
               CategoryCode="456",
               LessonCount="12",
               StartDate="01.01.24",
               Syllabus = new List<string>
               {
                "Docker",
                "Git",
                "AWS",
                "Google Cloud"
               },
               LearningMode=0,
               InstructorCode="4586",
               Image=""
          }
};
        // GET: api/<CourseController>
        [HttpGet]
        public IEnumerable<Course> Get()
        {
            return courseList;
        }

        // GET api/<CourseController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CourseController>
        [HttpPost]
        public void Post([FromBody] List<Course> course)
        {
            courseList = course;
        }

        // PUT api/<CourseController>/5
        [HttpPut("{id}")]
        public void Put(int code, [FromBody] Course course)
        {
            int index = courseList.FindIndex(c => c.Code == code);
            courseList[index] = course;
        }

        // DELETE api/<CourseController>/5
        [HttpDelete("{id}")]
        public void Delete(int code)
        {
            int index = courseList.FindIndex(c => c.Code == code);
            if (index < 0)
                return;
            courseList.Remove(courseList[index]);
        }
    }
}
