import mongoose from 'mongoose';

const connectionString = 'mongodb+srv://backend70080:coderhouse@cluster0.cfyfu.mongodb.net/Supermercado?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString);
        console.log('Conectado a MongoDB Atlas');
    } catch (error) {
        console.error('Error al conectar a MongoDB Atlas:', error);
        process.exit(1); // Salir del proceso si hay un error de conexión
    }
};

export default connectDB;
