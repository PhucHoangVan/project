/**
 * - Khi có một request đến server
 * - controller định tuyến để mapping các request
 * - với các request kèm params hay body thì cần validate đầu vào
 * - ??? đâu là interface và DTO để validate data này.
 *
 * - controller gọi đến service và truyền data đã validate vào
 * - ??? định nghĩa class service như thế nào để đảm bảo các method của class
 * - mỗi service (là một provider-Injectable sẽ được inject vào controller)
 * - mỗi service sẽ có các method và data đầu vào, data trả về
 * - 1 interface được tạo để service implements lại các method
 * - 1 inVo, outVo để format cho data đầu vào và data trả về (nhưng mà inVo, outVo ở service và controller có thể dùng chung không?)
 *
 * - service sau đó sẽ gọi đến repository để tương tác xuống CSDL
 * - mỗi repository cung cấp các phương thức cụ thể cho services
 * - 1 interface được tạo để repository implements lại các method
 * - inVo và outVo được tạo để format data và transfer và plain-to-class
 *
 */
