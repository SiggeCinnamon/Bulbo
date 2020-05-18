package sysjm3.bulbo.bulbo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MainController {

//	@RequestMapping(value = "/", method = RequestMethod.GET)
//	public ModelAndView firstPage() {
//		return new ModelAndView("login");
//	}

	@RequestMapping(value="/",method = RequestMethod.GET)
	public String home() {
		return "dashboard";
	}
	@RequestMapping(value="/login",method = RequestMethod.GET)
	public String logOn() {
		return "login";
	}

	@RequestMapping(value = "/error", method = RequestMethod.GET)
	public String errorMsg() {
		return "error";
	}

}
