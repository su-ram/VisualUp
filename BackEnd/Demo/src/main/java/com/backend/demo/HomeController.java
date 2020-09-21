package com.backend.demo;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

<<<<<<< HEAD
=======
/**
 * Handles requests for the application home page.
 */
>>>>>>> 7e996e2eefae9b66a81d6651cc6cab6c007647b6
@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
<<<<<<< HEAD
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("안녕????");
=======
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
>>>>>>> 7e996e2eefae9b66a81d6651cc6cab6c007647b6
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
<<<<<<< HEAD
		model.addAttribute("serverTime", "안녕하세용용용용" );
		
		return "/jsp/home";
=======
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
>>>>>>> 7e996e2eefae9b66a81d6651cc6cab6c007647b6
	}
	
}
