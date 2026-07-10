package dev.grainne.lightweightcp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.hibernate.autoconfigure.HibernateJpaAutoConfiguration;
import org.springframework.boot.jdbc.autoconfigure.DataSourceAutoConfiguration;
//import org.springframework.boot.security.autoconfigure.SecurityAutoConfiguration;
//import org.springframework.boot.security.autoconfigure.UserDetailsServiceAutoConfiguration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(
	 exclude = {
        DataSourceAutoConfiguration.class,
        HibernateJpaAutoConfiguration.class
    }
)
public class LightWeightCpApplication {

	public static void main(String[] args) {
		SpringApplication.run(LightWeightCpApplication.class, args);
	}

	@RestController
	public class HelloController
	{
    	@GetMapping("/api/hello")
    	public String hello()
    	{
        	return "Hello from backend!";
    	}
	}
}
