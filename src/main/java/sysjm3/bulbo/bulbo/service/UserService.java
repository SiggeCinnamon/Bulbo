//package sysjm3.bulbo.bulbo.service;
//
//import java.util.List;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import sysjm3.bulbo.bulbo.model.User;
//import sysjm3.bulbo.bulbo.repositories.UserRepository;
//
//@Service
//public class UserService {
//
//	@Autowired
//	private UserRepository userRepository;
//
//	public User saveUser(User user) {
//		return (user != null) ? userRepository.saveAndFlush(user) : null;
//	}
//
//	public void deleteUser(User user) {
//		if (user != null) {
//			userRepository.delete(user);
//		}
//	}
//
//	public List<User> findAll(User user) {
//		return userRepository.findAll();
//	}
//
//}
