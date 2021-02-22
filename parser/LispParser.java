/**
 * Availitys Homework
 * Gabriel Pridham
 * 2/20/2021
 * 
 *  Coding exercise: You are tasked to write a checker that validates the parentheses of a LISP code.
 *  Write a program (in Java or JavaScript) which takes in a string as an input and returns true if
 *  all the parentheses in the string are properly closed and nested.
 * 
 */
public class LispParser
{
   public static void main(String[] args){
       try{
        String str = new String(args[0]);
        boolean value = hasValidParentheses(str);
        System.out.println(value);
       }catch(Exception e){
           System.out.println("Error, please enter valid string");
       }
   }
   
   public static boolean hasValidParentheses(String str){
       int check = 0;
       int index = 0;
       do{
            if(str.charAt(index) == '('){
                check++;
            }
            else if(str.charAt(index) == ')'){
                check--;
            }
            index++;
       }while(index < str.length()  && check >= 0);

       return check == 0;
   }
}