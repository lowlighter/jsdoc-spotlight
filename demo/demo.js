/**
 * This is a class definition.
 * Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 * Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 * @example <caption>Simple usage</caption>
 * //Create an instance
 * let a = new Class()
 * @example <caption>Advanced usage</caption>
 * //Create an instance
 * let a = new Class()
 * Class.prototype.method = function () {
 *      return null
 * }
 * @category CategoryA
 */
     class Class {
         /**
          * This is the class constructor.
          */
         constructor() {
             /**
              * A public member description.
              * @type {Object}
              */
                this.member = {}

            /**
             * A public readonly member description.
             * @type {Object}
             * @readonly
             */
               this.readonly = {}
         }

         /**
          * This is a public method description.
          * @param {Object} argument - An argument description
          * @param {Object} [optional] - An optional argument
          * @param {Object} [opt_value=null] - An optional argument with a default value
          * @return {Object} Function's return
          * @public
          */
             publicMethod(argument, optional, opt_value) {
                 return {}
             }

        /**
         * This is a protected method description.
         * @param {?Object} nullable - Nullable argument
         * @param {...Object} repeatable - Repeatable argument
         * @return {Object|null} Function's return (nullable)
         * @protected
         */
             protectedMethod(nullable, repeatable) {

             }

         /**
          * This is a protected method description.
          * @param {Object} options - An argument with properties
          * @param {Number} options.number - A number
          * @param {String} [options.string] - A string
          * @protected
          */
             privateMethod(options) {

             }
     }

/**
 * This is a class definition.
 * Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
 * Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 * Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 * @category CategoryB
 * @interface
 */
     class Interface {
         /**
          * This is the class constructor
          * <div class="alert info">
          * This a info
          * </div>
          */
         constructor() {
             /**
              * Alerts types.
              * <div class="alert success">
              * This a success
              * </div>
              * <div class="alert warning">
              * This a warning
              * </div>
              * <div class="alert danger">
              * This a danger
              * </div>
              * @type {Object}
              */
             this.alerts = {}
         }

         /**
          * This is a virtual method.
          * @virtual
          */
         virtualMethod() {

         }

         /**
          * This is a static method.
          * @static
          */
         static staticMethod() {

         }
     }

 /**
  * This is a class definition.
  * Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  * Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  * Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  * Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  * @extends Class
  * @category CategoryA
  */
      class Extends extends Class {
          /**
           * This is the class constructor
           * <div class="alert info">
           * This a info
           * </div>
           */
          constructor() {
              super()
          }

          /**
           * This is a virtual method.
           * @fires Abstract
           * @fires Abstract#virtualMethod
           * @throws {Error} Thrown when there is an error
           */
          eventMethod() {

          }
      }
